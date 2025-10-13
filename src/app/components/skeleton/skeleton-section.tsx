export function SkeletonSection() {
    return (
        <div className="grid gap-6 md:grid-cols-2 items-stretch mb-6 p-6 shimmer">
            <div>
                <span className="shimmer w-24 p-2 h-6 block rounded-md"></span>
                <span className="shimmer w-full p-3 h-3 block rounded-md mt-3"></span>
                <span className="shimmer w-full p-3 h-3 block rounded-md mt-3"></span>
                <span className="shimmer w-11/12 p-3 h-3 block rounded-md mt-3"></span>
                <span className="shimmer w-36 p-3 h-3 block rounded-md mt-3"></span>
            </div>
            <div>
                <span className="shimmer w-full h-full p-3 block rounded-md"></span>
            </div>
        </div>
    );
}