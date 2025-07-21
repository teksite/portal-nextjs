// components/Icon.tsx
import {SVGProps} from 'react';
import iconsData from './icon-list.json';

interface IconData {
    name: string;
    path: string | string[];
    viewBox: string;
}

interface IconProps extends SVGProps<SVGSVGElement> {
    name: string;
    className?: string;
    pathClassName?: string;
    size?: number | string;
    title?: string;
}

export function IconPicker({
                               name,
                               size,
                               width = size || 24,
                               height = size || 24,
                               className,
                               pathClassName,
                               title,
                               fill = 'currentColor',
                               ...props
                           }: IconProps) {
    // Validate iconsData structure
    const icons = Array.isArray(iconsData.icon) ? iconsData.icon as IconData[] : [];
    const icon = icons.find((icon) => icon.name === name);

    if (!icon) {
        console.warn(`Icon "${name}" not found in icon-list.json`);
        return null;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={icon.viewBox}
            className={className}
            aria-hidden={title ? undefined : 'true'}
            {...props}
        >
            {title && <title>{title}</title>}
            {typeof icon.path === 'string' ? (
                <path fill={fill} d={icon.path} className={pathClassName}/>
            ) : (
                icon.path.map((path, index) => (
                    <path key={index} fill={fill} d={path} className={pathClassName}/>
                ))
            )}
        </svg>
    );
}