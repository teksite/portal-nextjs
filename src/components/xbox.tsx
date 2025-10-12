import {ReactNode, HTMLAttributes} from "react";

type XboxProps = {
    children: ReactNode;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Xbox({children, className, ...props}: XboxProps) {
    return (
        <div
            className={`bg-zinc-50 rounded-xl p-3 shadow border border-zinc-100 ${className}`} {...props}  >
            {children}
        </div>
    );
}