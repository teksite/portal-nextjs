import * as React from 'react';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

import { type VariantProps, cva } from 'class-variance-authority';

const DataListOrientationContext = React.createContext<'horizontal' | 'vertical'>('horizontal');

const dataListVariants = cva('overflow-hidden font-normal text-left', {
   variants: {
      orientation: {
         horizontal: 'flex flex-col',
         vertical: 'flex flex-col'
      },
      size: {
         default: 'text-base',
         sm: 'text-sm',
         lg: 'text-lg'
      }
   },
   defaultVariants: {
      orientation: 'horizontal',
      size: 'default'
   }
});

type DataListProps = React.ComponentProps<'dl'> &
   VariantProps<typeof dataListVariants> & {
      asChild?: boolean;
   };

const DataList = ({ className, orientation = 'horizontal', size, asChild = false, ...props }: DataListProps) => {
   const Comp = asChild ? Slot : 'dl';

   return (
      <DataListOrientationContext.Provider value={orientation || 'horizontal'}>
         <Comp className={cn(dataListVariants({ orientation, size }), className)} {...props} />
      </DataListOrientationContext.Provider>
   );
};

const DataListItem = ({ className, ...props }: React.ComponentProps<'div'>) => {
   const orientation = React.useContext(DataListOrientationContext);

   return (
      <div className={cn(className, 'flex', orientation === 'horizontal' ? 'items-center' : 'flex-col')} {...props} />
   );
};

const DataListLabel = ({ className, ...props }: React.ComponentProps<'div'>) => (
   <dt className={cn('text-gray-600 dark:text-gray-400', className)} {...props} />
);

const DataListValue = ({ className, ...props }: React.ComponentProps<'div'>) => (
   <dd className={cn('text-black dark:text-white', className)} {...props} />
);

export { DataList, DataListItem, DataListLabel, DataListValue };
