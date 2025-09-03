import { useEffect, useRef, useState } from 'react';

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
   const ref = useRef<T | null>(null);
   const [inView, setInView] = useState(false);

   useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const io = new IntersectionObserver(([entry]) => {
         setInView(entry.isIntersecting);
      }, options);

      io.observe(el);

      return () => io.disconnect();
   }, [options?.root, options?.rootMargin, options?.threshold]);

   return { ref, inView };
}
