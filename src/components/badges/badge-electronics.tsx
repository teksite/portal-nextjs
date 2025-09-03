import React from 'react';

export const BadgeElectronics = ({ electronics }: { electronics?: number | string }) => {
   return (
      <span
         title='ارائه نحوه '
         className={`inline-block w-24 min-w-fit rounded-xl px-2 py-1 text-center text-xs font-bold text-zinc-50 ${electronics ? 'bg-cyan-600' : 'bg-slate-800'}`}>
         {electronics ? 'الکترونیکی' : 'غیرالکترونیکی'}
      </span>
   );
};
