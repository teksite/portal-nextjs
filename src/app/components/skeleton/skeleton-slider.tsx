
export function SkeletonSlider ({skeletonCount = 8} :{skeletonCount?:number}){
    const skeletons = Array.from({ length: skeletonCount }, (_, i) => i);

    return (
        <ul className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 items-stretch justify-between">
            {skeletons.map((index) => (
                <li key={index} className="h-full">
                    <span className="shimmer w-full h-24 p-3 block rounded-md"></span>
                </li>
            ))}
        </ul>
    );
}