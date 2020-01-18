import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Brand } from "@src/Confing";

const { nameWithDomain: Name } = Brand;

export const Logo: React.FC<{ link?: string; small?: boolean }> = memo(
    ({ link, small }) => (
        <>
            {link ? (
                <div>
                    <Link to={link}>"logo" {Name}</Link>
                </div>
            ) : (
                <div>"logo" {Name}</div>
            )}
        </>
    ),
);
