import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IPath } from "@src/types/path";
import useStyles from "./styles";

import { Container, AppBar, Toolbar, IconButton, Box } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Navbar from "@src/components/Navbar";
import Logo from "@src/components/Logo";

const navbarLinks: IPath[] = [{ path: "/catalog", label: "Katalog" }];

interface IProps {
    onSwitchSidebar: () => void;
}

export const Header: React.FC<IProps> = memo(({ onSwitchSidebar }) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Container component="header">
                <Toolbar className={classes.toolbar}>
                    <Link className={classes.logo} to="/">
                        <Logo />
                    </Link>
                    <Box display="flex" alignItems="center">
                        <Navbar items={navbarLinks} />
                        <IconButton
                            edge="end"
                            color="inherit"
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
