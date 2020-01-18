import React from "react";
import { Link } from "react-router-dom";
import { IPathWithIcon } from "@src/types/path";

export const SidebarNav: React.FC<{ items: IPathWithIcon[] }> = ({ items }) => (
    <div>
        {items.map(({ path, label, icon }) => (
            <Link key={path} to={path}>
                "icon"
                <p>{label}</p>
            </Link>
        ))}
    </div>
);
