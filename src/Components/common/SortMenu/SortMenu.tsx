import React, { memo, useCallback, MouseEvent } from "react";
import useStyles from "./styles";

import {
    Sort as SortIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from "@material-ui/icons";
import { Button, Menu, MenuItem } from "@material-ui/core";

interface IProps {}

export const SortMenu: React.FC<IProps> = memo(() => {
    const [
        anchorElement,
        setAnchorElement,
    ] = React.useState<null | HTMLElement>(null);

    const classes = useStyles();

    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            setAnchorElement(event.currentTarget);
        },
        [setAnchorElement],
    );

    const handleClose = useCallback(() => {
        setAnchorElement(null);
    }, [setAnchorElement]);

    return (
        <>
            <Button
                disableElevation
                aria-controls="sorting"
                aria-haspopup="true"
                variant="outlined"
                color="default"
                onClick={handleClick}
                endIcon={<SortIcon />}
            >
                Sortuj
            </Button>
            <Menu
                keepMounted
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={handleClose}
            >
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    Najnowsze
                    <ArrowDropDownIcon className={classes.listIcon} />
                </MenuItem>
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    Nazwa
                    <ArrowDropDownIcon className={classes.listIcon} />
                </MenuItem>
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    Najnowsze
                    <ArrowDropDownIcon className={classes.listIcon} />
                </MenuItem>
            </Menu>
        </>
    );
});
