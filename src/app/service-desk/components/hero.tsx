'use client';

import { Banner } from '@/app/partials/Banner';
import { useFirstRender } from '@/hooks/use-first-render';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib';



import { GallerySearch } from './gallery/gallery-search';
import { GallerySearchContainer } from './gallery/gallery-search-container';
import { AnimatePresence, motion } from 'motion/react';





export function Hero() {
    const { ref, inView } = useInView<HTMLDivElement>({
        root: null,
        threshold: 0,
        rootMargin: '20px 0px 0px 0px',
    });
    const firstRender = useFirstRender();
    const sticky = !firstRender && !inView;

    return (
        <GallerySearchContainer>
            <Banner className="py-24">
                <h1>{'درگاه خدمات و مجوزها'}</h1>
                <p className="mt-6 mb-6 text-center md:mt-7 lg:mt-8">
                    {'در این بخش می‌توانید خدمت مورد نظر خود را جستجو کرده و نسبت به ثبت درخواست اقدام کنید'}
                </p>
                <div ref={ref} className="bg-transparent text-center">
                    <GallerySearch className="mx-auto w-full px-4 md:w-2xl xl:w-3xl" />
                </div>
            </Banner>

            <AnimatePresence>
                {sticky && (
                    <motion.div
                        className={cn('sticky top-14 z-10')}
                        initial={{ y: -24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -24, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 520, damping: 32, mass: 0.45 }}
                    >
                        <Banner className="absolute top-0 right-2 left-2">
                            <div className="py-3 bg-transparent text-center">
                                <GallerySearch className="mx-auto w-full px-4 md:w-2xl xl:w-3xl" />
                            </div>
                        </Banner>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="h-12"></div>
        </GallerySearchContainer>
    );
}
