import { JSX } from "react";
import { HeaderProps } from "@/layout/Header/Header.props";
import cn from "classnames";


export const Header = ({className}: HeaderProps): JSX.Element => {
    return (
        <header className={cn(className)}>
           Header
        </header>
    );
};
