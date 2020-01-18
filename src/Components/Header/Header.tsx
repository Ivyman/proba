import React, { memo } from "react";

// TODO remove icons
import Navbar from "@src/components/Navbar";
import Logo from "@src/components/Logo";

export const Header: React.FC<{
    onSwitchSidebar: () => void;
}> = memo(({ onSwitchSidebar }) => {
    const navbarLinks = [{ path: "/catalog", label: "Katalog" }];

    return (
        <header>
            <Logo link="/catalog" />
            <nav>
                <Navbar items={navbarLinks} />
                <div onClick={onSwitchSidebar}>"menu icon"</div>
            </nav>
        </header>
    );
});
