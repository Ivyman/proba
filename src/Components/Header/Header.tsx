import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IPath } from "@src/types/path";
import * as ROUTERS from "@src/config/router";
import useStyles from "./styles";

import { Container, AppBar, Toolbar, IconButton, Box } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Logo from "@src/components/common/Logo";
import Navbar from "./Navbar";

const navbarLinks: IPath[] = [{ path: ROUTERS.CATALOG, label: "Katalog" }];

interface IProps {
    onSwitchSidebar: () => void;
}

export const Header: React.FC<IProps> = memo(({ onSwitchSidebar }) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Container>
                <Toolbar className={classes.toolbar}>
                    <Link className={classes.logo} to="/">
                        <Logo />
                    </Link>
                    <Box display="flex" alignItems="center">
                        <Navbar items={navbarLinks} />
                        <IconButton
                            edge="end"
                            aria-label="menu"
                            onClick={onSwitchSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
});
