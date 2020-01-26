import React, { memo } from "react";
import { IPathWithIcon } from "@src/types/path";
import { Link } from "react-router-dom";
import useStyles from "./styles";

import {
    Drawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
} from "@material-ui/core";
import {
    ListAlt as ListAltIcon,
    ContactMail as ContactMailIcon,
} from "@material-ui/icons";
import Logo from "@src/components/Logo";

const sidebarLinks: IPathWithIcon[] = [
    { path: "/contact", label: "Kontakt", icon: <ContactMailIcon /> },
    { path: "/about", label: "O nas", icon: <ListAltIcon /> },
];

interface IProps {
    sidebarStatus: boolean;
    onClose: () => void;
}

export const Sidebar: React.FC<IProps> = memo(({ sidebarStatus, onClose }) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="temporary"
            anchor="right"
            open={sidebarStatus}
            onClose={onClose}
            className={classes.root}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <List component="nav" className={classes.list}>
                {sidebarLinks.map((item: IPathWithIcon) => (
                    <ListItem
                        button
                        component={Link}
                        className={classes.listItem}
                        key={item.path}
                        onClick={onClose}
                        to={item.path}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>

            <Divider />

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={1.5}
            >
                <Logo />
            </Box>
        </Drawer>
    );
});
