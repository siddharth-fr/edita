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
        const tint = i === 0 ? '#F0FFF7' : '#F0F7FF';

        return (
          <div
            key={i}
            className="group relative w-full p-1 transition-all duration-400 hover:-translate-y-2 flex flex-col"
            style={{
              background: tint,
              borderRadius: '24px',
              border: '1.5px solid rgba(0,0,0,0.03)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
              willChange: 'transform, box-shadow',
            }}
          >
            {/* PASTEL HEADER */}
            <div
              className="h-32 w-full relative overflow-hidden shrink-0 transition-all duration-300 group-hover:saturate-[1.1] group-hover:brightness-[1.02]"
              style={{
                borderRadius: '20px 20px 0 0',
                background: gradient,
              }}
            >
              {/* AMBIENT LIGHT */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: 'radial-gradient(circle at 28% 20%, rgba(255,255,255,0.4), transparent 70%)',
                }}
              />
              
              {/* Icon Container */}
              <div className="absolute top-5 right-5 w-11 h-11 bg-white/75 backdrop-blur-md rounded-xl flex items-center justify-center shadow-sm border border-white/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <block.icon size={22} style={{ color: '#059669' }} strokeWidth={2.5} />
              </div>
            </div>

            {/* FOLDER BODY (Naturally growing) */}
            <div
              className="relative bg-white flex flex-grow flex-col justify-start transition-all duration-300"
              style={{
                marginTop: '-24px',
                borderRadius: '0 0 20px 20px',
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
                  borderRadius: '10px 10px 0 0',
                  padding: '0 14px 0 20px',
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
                  left: '160px',
                  width: '20px',
                  height: '24px',
                  background: 'transparent',
                  boxShadow: '-10px 10px 0 0 #ffffff',
                  borderRadius: '0 0 0 10px'
                }}
              />

              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1E293B',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  marginBottom: '10px'
                }}
              >
                {block.title}
              </h2>
              <div
                style={{
                  fontSize: '14.5px',
                  color: '#64748B',
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
