import { ReactNode } from 'react';
import { Gradient } from '@/app/service-desk/components/gradient';
import { Container } from '@/components';
import { cn } from '@/lib';

interface BannerProps {
    children: ReactNode;
    className?: string;
    image?:string
}

export function Banner({ children, className , image=undefined }: BannerProps) {
    return (
        <div  className={cn(
           'relative overflow-hidden rounded-lg',
           image ? 'bg-cover bg-center' : 'bg-gray-50',
           className
        )}
              style={image ? { backgroundImage: `url(${image})` } : undefined}>
           {image ? '':
              <Gradient className="absolute inset-2 bottom-0 rounded-lg ring-1 ring-black/5 ring-inset" />
           }
            <Container className="relative">
                <div className="text-center">
                    {children}
                </div>
            </Container>
        </div>
    );
}
