import { JSX } from "react";
import cn from "classnames";
import { SidebarProps } from "@/layout/Sidebar/Sidebar.props";


export const Sidebar = ({className}: SidebarProps): JSX.Element => {
    return (
        <aside className={cn(className)}>
            Sidebar
        </aside>
    );
};
