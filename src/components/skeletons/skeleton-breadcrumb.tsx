export function SkeletonBreadcrumbs() {
    return (
        <div className=" bg-zinc-50 px-3 py-2 shadow mb-6">
           <div className="flex items-center gap-1">
               <span className="shimmer p-2 h-2 w-16 block"></span>
               <span className="mx-1 h-2 w-2 shimmer"></span>
               <span className="shimmer p-2 h-2 w-16 block"></span>
               <span className="mx-1 h-2 w-2 shimmer"></span>
               <span className="shimmer p-2 h-2 w-16 block"></span>
           </div>

        </div>
    );
}
