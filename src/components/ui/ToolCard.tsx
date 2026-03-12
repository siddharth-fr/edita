'use client';

import { useState } from 'react'

const PALETTE = {
  blue: { gradient: 'linear-gradient(135deg,#F5F9FF,#E6F0FF)' },
  purple: { gradient: 'linear-gradient(135deg,#F8F4FF,#EDE5FF)' },
  orange: { gradient: 'linear-gradient(135deg,#FFF6EC,#FFEAD8)' },
  cyan: { gradient: 'linear-gradient(135deg,#F2FDFF,#DCF8FF)' },
  indigo: { gradient: 'linear-gradient(135deg,#F3F5FF,#E5E9FF)' },
  pink: { gradient: 'linear-gradient(135deg,#FFF3F7,#FFE5F0)' },
  rose: { gradient: 'linear-gradient(135deg,#FFF4F4,#FFE7E7)' },
  green: { gradient: 'linear-gradient(135deg,#F3FFF7,#E2FBEA)' },
  emerald: { gradient: 'linear-gradient(135deg,#F4FFF9,#E5FBEF)' },
  violet: { gradient: 'linear-gradient(135deg,#F7F5FF,#EEE9FF)' }
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
          background: '#ffffff',
          borderRadius: '22px',
          padding: '4px',
          overflow: 'hidden',
          transition: 'all .4s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'translateY(-6px)' : 'none',
          border: '1px solid rgba(16, 185, 129, 0.08)',
          boxShadow: hovered
            ? '0 25px 50px rgba(16, 185, 129, 0.08), 0 10px 20px rgba(0,0,0,0.02)'
            : '0 8px 20px rgba(0,0,0,0.02)'
        }}
      >

        {/* PASTEL BACKGROUND */}

        <div
          style={{
            position: 'absolute',
            inset: '4px',
            borderRadius: '18px',
            background: pal.gradient,
            overflow: 'hidden',
            transition: 'all .3s ease',
            filter: hovered
              ? 'saturate(1.08) brightness(1.02)'
              : 'none'
          }}
        >

          {/* AMBIENT LIGHT */}

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: hovered
                ? 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.55), transparent 65%)'
                : 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.35), transparent 70%)',
              transition: 'all .35s ease'
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
            borderRadius: '0 0 18px 18px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >

          {/* CATEGORY NOTCH */}

          <div
            style={{
              position: 'absolute',
              top: '-24px',
              left: 0,
              width: '52%',
              height: '24px',
              background: '#ffffff',
              borderRadius: '9px 9px 0 0',
              padding: '4px 14px 0 16px',
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
              left: '52%',
              width: '16px',
              height: '24px',
              background: 'transparent',
              boxShadow: '-8px 8px 0 0 #ffffff',
              borderRadius: '0 0 0 9px'
            }}
          />

          {/* TOOL NAME */}

          <div
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1F2937',
              letterSpacing: '-0.015em',
              lineHeight: 1.35
            }}
          >
            {name}
          </div>

        </div>

      </div>

    </a>

  )
}