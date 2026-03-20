'use client';

import { useState } from 'react'

const PALETTE = {
  blue: { gradient: 'linear-gradient(135deg,#F5F9FF,#E6F0FF)', tint: '#F0F7FF', shadow: 'rgba(59, 130, 246, 0.1)' },
  purple: { gradient: 'linear-gradient(135deg,#F8F4FF,#EDE5FF)', tint: '#F5F0FF', shadow: 'rgba(124, 58, 237, 0.1)' },
  orange: { gradient: 'linear-gradient(135deg,#FFF6EC,#FFEAD8)', tint: '#FFF5EB', shadow: 'rgba(245, 158, 11, 0.1)' },
  cyan: { gradient: 'linear-gradient(135deg,#F2FDFF,#DCF8FF)', tint: '#EBFDFF', shadow: 'rgba(6, 182, 212, 0.1)' },
  indigo: { gradient: 'linear-gradient(135deg,#F3F5FF,#E5E9FF)', tint: '#F0F3FF', shadow: 'rgba(79, 70, 229, 0.1)' },
  pink: { gradient: 'linear-gradient(135deg,#FFF3F7,#FFE5F0)', tint: '#FFF0F5', shadow: 'rgba(219, 39, 119, 0.1)' },
  rose: { gradient: 'linear-gradient(135deg,#FFF4F4,#FFE7E7)', tint: '#FFF0F0', shadow: 'rgba(225, 29, 72, 0.1)' },
  green: { gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)', tint: '#F0FFF4', shadow: 'rgba(22, 163, 74, 0.1)' },
  emerald: { gradient: 'linear-gradient(135deg,#F4FFF9,#E5FBEF)', tint: '#F0FFF7', shadow: 'rgba(5, 150, 105, 0.1)' },
  violet: { gradient: 'linear-gradient(135deg,#F7F5FF,#EEE9FF)', tint: '#F3F0FF', shadow: 'rgba(124, 58, 237, 0.1)' }
}

type Theme = keyof typeof PALETTE

interface ToolCardProps {
  name: string
  slug: string
  theme: Theme
  category: string
}

export default function ToolCard({
  name,
  slug,
  theme,
  category
}: ToolCardProps) {

  const [hovered, setHovered] = useState(false)

  const pal = PALETTE[theme] ?? PALETTE.blue

  return (

    <a
      href={`/tools/${slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* CARD SHELL */}

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '300px',
          aspectRatio: '4 / 3',
          background: pal.tint,
          borderRadius: '24px',
          padding: '4px',
          overflow: 'hidden',
          transition: 'all .4s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'translateY(-8px)' : 'none',
          border: hovered ? `1.5px solid ${pal.shadow.replace('0.1', '0.2')}` : '1.5px solid rgba(0,0,0,0.03)',
          boxShadow: hovered
            ? `0 28px 56px ${pal.shadow}, 0 12px 24px rgba(0,0,0,0.03)`
            : '0 8px 16px rgba(0,0,0,0.02)',
          willChange: 'transform, box-shadow, border',
        }}
      >

        {/* PASTEL BACKGROUND */}

        <div
          style={{
            position: 'absolute',
            inset: '4px',
            bottom: '58%',
            borderRadius: '20px 20px 0 0',
            background: pal.gradient,
            overflow: 'hidden',
            transition: 'filter 0.3s ease',
            filter: hovered
              ? 'saturate(1.1) brightness(1.02)'
              : 'none',
            willChange: 'filter',
          }}
        >

          {/* AMBIENT LIGHT */}

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: hovered
                ? 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.6), transparent 65%)'
                : 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.4), transparent 70%)',
              transition: 'background 0.35s ease'
            }}
          />

        </div>

        {/* FOLDER BODY */}

        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            left: '4px',
            right: '4px',
            height: '58%',
            background: '#ffffff',
            borderRadius: '0 0 20px 20px',
            padding: '24px 20px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            transition: 'background 0.3s ease'
          }}
        >

          {/* CATEGORY NOTCH */}

          <div
            style={{
              position: 'absolute',
              top: '-24px',
              left: 0,
              width: '54%',
              height: '24px',
              background: '#ffffff',
              borderRadius: '10px 10px 0 0',
              padding: '4px 14px 0 16px',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#94A3B8',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {category}
          </div>

          {/* CURVE SEAM */}

          <div
            style={{
              position: 'absolute',
              top: '-24px',
              left: '54%',
              width: '20px',
              height: '24px',
              background: 'transparent',
              boxShadow: '-10px 10px 0 0 #ffffff',
              borderRadius: '0 0 0 10px'
            }}
          />

          {/* TOOL NAME */}

          <div
            style={{
              fontSize: '17px',
              fontWeight: 700,
              color: '#1E293B',
              letterSpacing: '-0.02em',
              lineHeight: 1.3
            }}
          >
            {name}
          </div>

        </div>

      </div>

    </a>

  )
}