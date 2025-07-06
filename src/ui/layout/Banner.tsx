import {ReactNode} from "react";

export default function Banner({title, children}: { title: string, children?: ReactNode }) {
    return (
        <header className="w-full aspect-square sm:h-72 md:h-96 bg-cover bg-no-repeat bg-[url('/assets/images/banners/iran-banner-400.jpg')] sm:bg-[url('/assets/images/banners/iran-banner-600.jpg')] md:bg-[url('/assets/images/banners/iran-banner-1920.jpg')]">
            <div className='flex items-center justify-center w-full h-full bg-black/50'>
                <div className='inner-container'>
                    <h1 className="text-zinc-50 text-4xl font-bold text-center mb-6">{title}</h1>
                    {children}
                </div>
            </div>
        </header>
    );
}