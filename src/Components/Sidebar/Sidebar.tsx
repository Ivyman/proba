import React, { memo } from "react";
import { IPathWithIcon } from "@src/types/path";
import Logo from "@src/components/Logo";
import SidebarNav from "@src/components/SidebarNav";

const sidebarLinks: IPathWithIcon[] = [
    { path: "/contact", label: "Kontakt", icon: "Contact" },
    { path: "/about", label: "O nas", icon: "Menu" },
];

export const Sidebar: React.FC<{
    sidebarStatus: boolean;
}> = memo(({ sidebarStatus }) => (
    <div>
        <div>
            <SidebarNav items={sidebarLinks} />
        </div>
        <div>
            <Logo small />
        </div>
    </div>
));
