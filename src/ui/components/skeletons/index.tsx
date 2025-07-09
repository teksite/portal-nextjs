export function CardWithIconSkeleton() {
    return (
        <div className="border border-zinc-300 rounded-xl shadow-lg bg-white p-6 animate-pulse">
            <div className="w-[75px] h-[75px] aspect-square rounded-full bg-gray-200 mx-auto -mt-16 mb-3"></div>
            <div className='space-y-6'>
                <div className="h-6 rounded bg-gray-200 w-24 mx-auto"></div>
                <div className="grid gap-4 lg:grid-cols-3">
                    <div className="h-3 rouded w-full bg-gray-200 lg:col-span-3 mx-auto"></div>
                    <div className="h-3 rouded w-full bg-gray-200 lg:col-span-2 mx-auto"></div>
                    <div className="h-3 rouded w-full bg-gray-200 mx-auto"></div>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3 w-full'>
                    <div className="p-4 bg-gray-200 border-2 border-gray-200 w-full"></div>
                    <div className="p-4  border-2 border-gray-200 w-full"></div>
                </div>

            </div>
        </div>
    );
}

export function CardWithIconListSkeleton() {

    return (
        <ul className="grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <li><CardWithIconSkeleton/></li>
            <li><CardWithIconSkeleton/></li>
            <li><CardWithIconSkeleton/></li>
            <li><CardWithIconSkeleton/></li>
            <li><CardWithIconSkeleton/></li>
            <li><CardWithIconSkeleton/></li>
            <li><CardWithIconSkeleton/></li>
            <li><CardWithIconSkeleton/></li>
        </ul>
    );
}

export function GroupedCardWithIconListSkeleton() {

    return (
       <>
           <div className="h-6 rounded bg-gray-200 w-24 mx-auto mb-12"></div>
           <ul className="grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               <li><CardWithIconSkeleton/></li>
               <li><CardWithIconSkeleton/></li>
               <li><CardWithIconSkeleton/></li>
               <li><CardWithIconSkeleton/></li>
               <li><CardWithIconSkeleton/></li>
               <li><CardWithIconSkeleton/></li>
               <li><CardWithIconSkeleton/></li>
               <li><CardWithIconSkeleton/></li>
           </ul>
       </>
    );
}