import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IPath } from "@src/types/path";
import useStyles from "./styles";

import { MenuList, MenuItem } from "@material-ui/core";

interface IProps {
    items: IPath[];
}

export const Navbar: React.FC<IProps> = memo(({ items }) => {
    const classes = useStyles();

    return (
        <MenuList className={classes.root}>
            {items.map(({ path, label }) => (
                <MenuItem
                    key={path}
                    component={Link}
                    to={path}
                    className={classes.menuItem}
                >
                    {label}
                </MenuItem>
            ))}
        </MenuList>
    );
});
