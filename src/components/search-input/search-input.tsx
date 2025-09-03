'use client';

import React, { ComponentType, useEffect, useId, useRef, useState } from 'react';

import { cn } from '@/lib';
import { Popover, PopoverAnchor, PopoverContent } from '@/registry/new-york-v4/ui/popover';
import { Item } from '@radix-ui/react-accordion';

import { Input, InputProps } from '../input';
import { HighlightText } from './highlight-text';
import { SearchButton } from './search-input-button';
import { SearchPrefix } from './search-input-prefix';
import './search-input.css';
import { SearchInputButtonTypes } from './shared';
import { cva } from 'class-variance-authority';
import { RemoveScroll } from 'react-remove-scroll';

const inputVariants = cva('peer', {
   variants: {
      type: {
         noButton: '',
         buttonInside: '',
         buttonOutside: '-me-px rounded-e-none shadow-none focus-visible:z-1'
      },
      size: {
         default: '',
         sm: '',
         lg: '',
         xl: ''
      }
   },
   compoundVariants: [
      { type: 'noButton', size: 'default', class: 'ps-9' },
      { type: 'noButton', size: 'sm', class: 'ps-7' },
      { type: 'noButton', size: 'lg', class: 'ps-9' },
      { type: 'noButton', size: 'xl', class: 'ps-11' }
   ]
});

const EMPTY_ARRAY: unknown[] = [];
export type SearchInputSelectionValue<T> = {
   selectedQuery?: string;
   selectedItem?: T;
};
export type SearchInputProps<T> = Pick<InputProps, 'size' | 'placeholder'> & {
   type?: SearchInputButtonTypes;
   data: T[];
   getItemLabel: (item: T) => string;
   getItemKey: (item: T) => string;
   itemComponent: ComponentType<{ item: T; query?: string }>;
   text: string;
   onTextChange: (text: string) => void;
   onQueryChange?: (newQuery?: string) => void;
   onSelectChange?: (selection: T) => void;
};

export function SearchInput<T>({
   size = 'default',
   placeholder = 'جستجو',
   type = 'noButton',
   data = EMPTY_ARRAY as T[],
   getItemLabel,
   getItemKey,
   itemComponent: ItemComponent,
   text,
   onTextChange,
   onQueryChange,
   onSelectChange
}: SearchInputProps<T>) {
   const id = useId();
   const [open, setOpen] = useState(false);
   const [highlightIndex, setHighlightIndex] = useState<number | undefined>();
   const ref = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!containerRef.current) return;
      const el = containerRef.current.querySelector<HTMLElement>(`[data-index="${highlightIndex}"]`);
      if (el) {
         // block: 'nearest' keeps it as visible as possible without over-scrolling
         el.scrollIntoView({ behavior: 'auto', block: 'nearest' });
      }
   }, [highlightIndex]);
    useEffect(() => {
        const handleScroll = () => {
            setOpen(false);
            setHighlightIndex(undefined);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Escape') return;

      if (!open && highlightIndex === undefined && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
         setOpen(true);
         e.preventDefault();

         return;
      }

      if (e.key === 'ArrowDown' && data.length > 0) {
         e.preventDefault();
         setHighlightIndex((prev) => {
            // wrap to top if at end
            // const nextIndex = prev < data.length - 1 ? prev + 1 : 0;
            const nextIndex = prev === undefined || prev >= data.length - 1 ? 0 : prev + 1;

            return nextIndex;
         });
      } else if (e.key === 'ArrowUp' && data.length > 0) {
         e.preventDefault();
         setHighlightIndex((prev) => {
            // wrap to bottom if at start
            // const nextIndex = prev > 0 ? prev - 1 : data.length - 1;
            const nextIndex = prev === undefined || prev <= 0 ? data.length - 1 : prev - 1;

            return nextIndex;
         });
      } else if (e.key === 'Enter') {
         e.preventDefault();
         handleListItemSelect(highlightIndex, text || '');
      }
   };

   const handleListItemSelect = (index: number | undefined, query: string) => {
      const item = index !== undefined && index >= 0 ? data[index] : undefined;
      if (item) {
         const newQuery = item ? getItemLabel(item) : query;
         onTextChange(newQuery);
         setHighlightIndex(undefined);
         onSelectChange && onSelectChange(item);
      } else {
         onQueryChange && onQueryChange(query);
      }
      setOpen(false);
   };

   return (
      <Popover
         onOpenChange={(newOpen) => {
            setOpen(newOpen);
            if (!newOpen) setHighlightIndex(undefined);
         }}
         open={open}>
         <PopoverAnchor asChild>
            <div ref={ref} className='relative flex rounded-md shadow-xs'>
               {type === 'noButton' && <SearchPrefix size={size} />}
               <Input
                  type='text'
                  placeholder={placeholder}
                  size={size}
                  className={cn('bg-background', inputVariants({ size, type }))}
                  value={text}
                  // onFocus={() => setOpen(true)}
                  onKeyDown={handleKeyDown}
                  onChange={({ target: { value } }) => {
                     onTextChange(value);
                     setHighlightIndex(undefined);
                     setOpen(true);
                  }}
               />
               {type !== 'noButton' && (
                  <SearchButton size={size} type={type} onClick={() => handleListItemSelect(undefined, text || '')} />
               )}
            </div>
         </PopoverAnchor>
          <PopoverContent
              ref={containerRef}
              style={{ width: ref.current?.getBoundingClientRect().width || 500 }}
              className='max-h-[calc(50vh-60px)] w-full overflow-y-auto'
              onOpenAutoFocus={(e) => e.preventDefault()}
              onCloseAutoFocus={(e) => e.preventDefault()}
              onFocusOutside={(e) => e.preventDefault()}
              // onInteractOutside={(e) => e.preventDefault()}
              // onPointerDownOutside={(e) => e.preventDefault()}
              // onEscapeKeyDown={(e) => {
              //    setHighlightIndex(undefined);
              // }}
          >
              <ul className='bbbb'>
                  {data.length ? (
                      data.map((item, idx) => (
                          <li
                              key={getItemKey(item)}
                              data-index={idx}
                              className={cn(
                                  'cursor-pointer px-4 py-2 hover:bg-zinc-50',
                                  idx === highlightIndex && 'bg-zinc-100',
                                  'border-b border-gray-300 last:border-b-0'
                              )}
                              onClick={() => {
                                  handleListItemSelect(idx, '');
                              }}>
                              <ItemComponent item={item} query={text} />
                          </li>
                      ))
                  ) : (
                      <li className='px-4 py-2 text-gray-500'>موردی یافت نشد</li>
                  )}
              </ul>
          </PopoverContent>
      </Popover>
   );
}

SearchInput.Highlight = HighlightText;
