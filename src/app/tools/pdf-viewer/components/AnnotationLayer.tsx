import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnnotationElement, getAnnotations, saveAnnotations } from '../lib/idb';

interface Point {
  x: number;
  y: number;
}

interface AnnotationLayerProps {
  fileId: string;
  pageNum: number;
  activeTool: string;
  zoom: number;
}

export function AnnotationLayer({ fileId, pageNum, activeTool, zoom }: AnnotationLayerProps) {
  const [elements, setElements] = useState<AnnotationElement[]>([]);
  const [currentPath, setCurrentPath] = useState<Point[] | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // Laser specific state
  const [laserPoints, setLaserPoints] = useState<{ x: number; y: number; t: number }[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    async function load() {
      const saved = await getAnnotations(fileId, pageNum);
      setElements(saved || []);
    }
    load();
  }, [fileId, pageNum]);

  // Laser fade out loop
  useEffect(() => {
    if (activeTool !== 'laser') {
      setLaserPoints([]);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const loop = () => {
      const now = Date.now();
      setLaserPoints(prev => {
        // Keep points less than 1 second old
        const filtered = prev.filter(p => now - p.t < 1000);
        return filtered.length !== prev.length ? filtered : prev;
      });
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [activeTool]);

  const getPointerCoords = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!svgRef.current) return null;
    const rect = svgRef.current.getBoundingClientRect();
    // Normalize coordinates to 100% zoom scale
    const scale = zoom / 100;
    return {
      x: (e.clientX - rect.left) / scale,
      y: (e.clientY - rect.top) / scale
    };
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!['highlight', 'draw', 'laser'].includes(activeTool)) return;
    // For mouse, only left click
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    e.preventDefault();
    setIsDrawing(true);
    const coords = getPointerCoords(e);
    if (!coords) return;

    if (activeTool === 'laser') {
      setLaserPoints([{ x: coords.x, y: coords.y, t: Date.now() }]);
    } else {
      setCurrentPath([coords]);
    }
    // Capture pointer to track outside bounds
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const coords = getPointerCoords(e);
    if (!coords) return;

    if (activeTool === 'laser') {
      setLaserPoints(prev => [...prev, { x: coords.x, y: coords.y, t: Date.now() }]);
    } else {
      setCurrentPath(prev => prev ? [...prev, coords] : [coords]);
    }
  };

  const handlePointerUp = async (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    setIsDrawing(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    if (activeTool === 'laser') return; // Laser doesn't persist

    if (currentPath && currentPath.length > 1) {
      const newElement: AnnotationElement = {
        type: activeTool as 'highlight' | 'pen',
        path: currentPath,
        color: activeTool === 'highlight' ? '#fde047' : '#ef4444', // yellow highlight, red pen
        width: activeTool === 'highlight' ? 16 : 3,
        opacity: activeTool === 'highlight' ? 0.4 : 1
      };
      
      const newElements = [...elements, newElement];
      setElements(newElements);
      setCurrentPath(null);
      await saveAnnotations(fileId, pageNum, newElements);
    } else {
      setCurrentPath(null);
    }
  };

  // Build SVG path data
  const buildSvgPath = (points: Point[]) => {
    if (points.length === 0) return '';
    const d = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`));
    return d.join(' ');
  };

  const buildLaserPath = (points: {x:number, y:number, t:number}[]) => {
    if (points.length === 0) return '';
    const d = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`));
    return d.join(' ');
  };

  const pointerEvents = ['highlight', 'draw', 'laser'].includes(activeTool) ? 'auto' : 'none';
  const scale = zoom / 100;

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: pointerEvents as any, touchAction: 'none' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <g style={{ transform: `scale(${scale})`, transformOrigin: '0 0' }}>
        {/* Render persisted elements */}
        {elements.map((el, idx) => (
          el.path && (
            <path
              key={idx}
              d={buildSvgPath(el.path)}
              stroke={el.color}
              strokeWidth={el.width}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={el.opacity}
              style={{ mixBlendMode: el.type === 'highlight' ? 'multiply' : 'normal' }}
            />
          )
        ))}

        {/* Render current drawing path */}
        {currentPath && activeTool !== 'laser' && (
          <path
            d={buildSvgPath(currentPath)}
            stroke={activeTool === 'highlight' ? '#fde047' : '#ef4444'}
            strokeWidth={activeTool === 'highlight' ? 16 : 3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={activeTool === 'highlight' ? 0.4 : 1}
            style={{ mixBlendMode: activeTool === 'highlight' ? 'multiply' : 'normal' }}
          />
        )}

        {/* Render laser pointer */}
        {laserPoints.length > 0 && (
          <path
            d={buildLaserPath(laserPoints)}
            stroke="#ef4444"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
            filter="drop-shadow(0px 0px 4px rgba(239, 68, 68, 0.8))"
          />
        )}
      </g>
    </svg>
  );
}
