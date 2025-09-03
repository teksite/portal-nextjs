import React, { ComponentProps } from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';

import { InputProps } from '../input';
import { SearchInputButtonTypes } from './shared';
import { cva } from 'class-variance-authority';
import { Search } from 'lucide-react';

const buttonVariants = cva('peer', {
   variants: {
      type: {
         buttonInside: 'text-muted-foreground hover:text-accent-foreground absolute inset-y-0 end-0',
         buttonOutside: '-me-px rounded-s-none shadow-none focus-visible:z-1'
      }
   }
});

const iconVariants = cva('', {
   variants: {
      size: {
         sm: 'size-3.5',
         default: 'size-4',
         lg: 'size-4.5',
         xl: 'size-5'
      }
   }
});

type SearchButtonProps = {
   type: Exclude<SearchInputButtonTypes, 'noButton'>;
   size: InputProps['size'];
   onClick?: ComponentProps<'button'>['onClick'];
};

export function SearchButton({ type, size, onClick }: SearchButtonProps) {
   return (
      <Button
         variant={type === 'buttonOutside' ? 'outline' : 'link'}
         size={size}
         // size="icon"
         className={buttonVariants({ type })}
         onClick={onClick}>
         <Search className={iconVariants({ size })} />
         <span className='sr-only'>جستجو</span>
      </Button>
   );
}
