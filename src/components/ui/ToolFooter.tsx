import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface FooterBlock {
  title: string;
  description: string | ReactNode;
  icon: LucideIcon;
  category?: string;
  gradient?: string;
}

interface ToolFooterProps {
  blocks: FooterBlock[];
}

export function ToolFooter({ blocks }: ToolFooterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12">
      {blocks.map((block, i) => {
        const gradient = block.gradient || (i === 0 ? 'linear-gradient(135deg,#F3FFF7,#E2FBEA)' : 'linear-gradient(135deg,#F5F9FF,#E6F0FF)');
        const category = block.category || (i === 0 ? 'FEATURES' : 'PRIVACY');
        
        return (
          <div
            key={i}
            className="group relative w-full bg-white transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] p-1"
            style={{
              borderRadius: '22px',
              border: '1px solid rgba(16, 185, 129, 0.08)',
            }}
          >
            {/* PASTEL HEADER */}
            <div
              className="h-32 w-full relative overflow-hidden shrink-0 transition-all duration-300 group-hover:saturate-[1.08] group-hover:brightness-[1.02]"
              style={{
                borderRadius: '18px 18px 0 0',
                background: gradient,
              }}
            >
              {/* AMBIENT LIGHT */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.35), transparent 70%)',
                }}
              />
              
              {/* Icon Container */}
              <div className="absolute top-5 right-5 w-10 h-10 bg-white/70 backdrop-blur-md rounded-[12px] flex items-center justify-center shadow-sm border border-white/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <block.icon size={22} style={{ color: '#059669' }} strokeWidth={2.5} />
              </div>
            </div>

            {/* FOLDER BODY (Naturally growing) */}
            <div
              className="relative bg-white flex flex-grow flex-col justify-start"
              style={{
                marginTop: '-24px',
                borderRadius: '0 0 18px 18px',
                padding: '28px 20px 24px',
              }}
            >
              {/* CATEGORY NOTCH */}
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: 0,
                  width: '160px',
                  height: '24px',
                  background: '#ffffff',
                  borderRadius: '9px 9px 0 0',
                  padding: '4px 14px 0 20px',
                  fontSize: '10.5px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#6B7280',
                  textTransform: 'uppercase'
                }}
              >
                {category}
              </div>

              {/* CURVE SEAM */}
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: '160px',
                  width: '16px',
                  height: '24px',
                  background: 'transparent',
                  boxShadow: '-8px 8px 0 0 #ffffff',
                  borderRadius: '0 0 0 9px'
                }}
              />

              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1F2937',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.35,
                  marginBottom: '10px'
                }}
              >
                {block.title}
              </h2>
              <div
                style={{
                  fontSize: '14.5px',
                  color: '#6B7280',
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                {block.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
