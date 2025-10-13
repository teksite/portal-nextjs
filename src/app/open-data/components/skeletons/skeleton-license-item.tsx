
export function SkeletonLicenseItem() {
    return (
        <div className="shimmer h-24 flex flex-col justify-between">
            <div className='px-3 py-6'>
               <span className="shimmer w-24 h-3 block"></span>
            </div>
            <div className=" flex items-center justify-end px-3 py-2">
                 <span className="shimmer w-12 h-3"></span>
            </div>
        </div>
    );

}