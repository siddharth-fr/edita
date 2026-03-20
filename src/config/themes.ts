export const THEME_PALETTE = {
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
} as const;

export type AppTheme = keyof typeof THEME_PALETTE;
