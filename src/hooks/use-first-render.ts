import { useEffect, useRef } from 'react';

export const useFirstRender = (): boolean => {
   const isFirstRender = useRef<boolean>(true);

   useEffect(() => {
      isFirstRender.current = false;
   }, []);

   return isFirstRender.current;
};
