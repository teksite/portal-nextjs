import {ReactNode} from "react";
import SafeImage from "@/ui/components/safeImage";

interface CardWithIconProps {
    image: string;
    title: string;
    className?: string;
    children: ReactNode | (() => ReactNode);
}

export default function CardWithIcon({image, title, children, className = undefined}: CardWithIconProps) {
    return (
        <div className={`x-box flex flex-col gap-3 justify-between  ${className}`}>
            <div>
                <div
                    className="aspect-square rounded-full bg-zinc-200 dark:bg-zinc-300 mx-auto -mt-12 mb-3 p-1 w-[75px] h-[75px] text-center content-center">
                    <SafeImage src={image} fallbackSrc="/assets/images/placeholder/certificate-placeholder.png"
                               alt={title} width={50} height={50} loading="lazy" decoding="async" className="mx-auto"/>
                </div>
                <h3 className="text-center text-base">{title}</h3>
            </div>

            <div className='flex flex-col gap-6 justify-between  justify-self-end w-full h-full'>
                {typeof children === "function" ? children() : children || null}
            </div>

        </div>
    );
}

