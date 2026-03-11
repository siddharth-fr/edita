import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'destructive';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', isLoading, children, disabled, style, ...props }, ref) => {
        const gradientStyle = variant === 'default'
            ? { background: 'linear-gradient(135deg, #05c6ff, #0066ff)', ...style }
            : style;

        return (
            <button
                ref={ref}
                disabled={isLoading || disabled}
                style={gradientStyle}
                className={cn(
                    'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]',
                    {
                        'text-white shadow-md hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]': variant === 'default',
                        'border border-border bg-card hover:bg-muted text-foreground': variant === 'outline',
                        'hover:bg-muted text-foreground': variant === 'ghost',
                        'bg-red-500 text-white hover:bg-red-600 shadow-sm': variant === 'destructive',
                        'h-10 px-5 py-2': size === 'default',
                        'h-8 px-3 text-xs rounded-lg': size === 'sm',
                        'h-12 px-8 text-base': size === 'lg',
                        'h-10 w-10 p-0': size === 'icon',
                    },
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
