import React from "react";
import { Link } from "react-router-dom";
import { IPath } from "@src/types/path";

export const Navbar: React.FC<{ items: IPath[] }> = ({ items }) => (
    <div>
        {items.map(({ path, label }) => (
            <Link key={path} to={path}>
                {label}
            </Link>
        ))}
    </div>
);
