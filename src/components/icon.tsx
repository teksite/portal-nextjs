// Icon.tsx

import {IconName, iconsList} from "@/components/iconList";

type IconProps = {
    icon: string;
    size?: number | string;
    width?: number | string;
    height?: number | string;
    className?: string;
    strokeWidth?: number | string;
    x?: number;
    y?: number;
} & React.SVGProps<SVGSVGElement>;

export function IconPicker({
                               icon,
                               size = 18,
                               width,
                               height,
                               className = "",
                               strokeWidth = 1,
                               ...rest
                           }: IconProps) {
    const path = iconsList[icon as IconName] ?? iconsList['star'];
    if (!path) return null;

    return (
        <svg
            width={width ?? size}
            height={height ?? size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            dangerouslySetInnerHTML={{__html: path}}
            {...rest}
        />
    );
}
