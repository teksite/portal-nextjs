import { cn } from '@/lib';
import { Slot } from '@radix-ui/react-slot';

import { clsx } from 'clsx';

export function Container({ className, asChild, ...rest }: React.ComponentProps<'div'> & { asChild?: boolean }) {
   const Comp = asChild ? Slot : 'div';

   return <Comp className={cn(className, 'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8')} {...rest} />;
}
