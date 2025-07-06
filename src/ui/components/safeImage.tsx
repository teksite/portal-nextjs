'use client'

import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

// Extend ImageProps to include fallbackSrc
interface SafeImageProps extends ImageProps {
    fallbackSrc: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ src, alt, fallbackSrc, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            src={imgSrc}
            alt={alt}
            {...rest}
            onLoadStart={() => setImgSrc(fallbackSrc)}
            onError={() => setImgSrc(fallbackSrc)}
        />
    );
};

export default SafeImage;