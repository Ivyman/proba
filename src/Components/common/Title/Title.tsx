import React, { memo } from "react";
import useStyles from "./styles";

import { Typography } from "@material-ui/core";
import { RoomOutlined as RoomOutlinedIcon } from "@material-ui/icons";

interface IProps {
    name: string;
    address: string;
    large?: boolean;
    whiteText?: boolean;
}

export const Title: React.FC<IProps> = memo(
    ({ name, address, large, whiteText }) => {
        const classes = useStyles();

        return (
            <>
                <Typography
                    component="h6"
                    variant={large ? "h5" : "h6"}
                    className={whiteText ? classes.whiteText : classes.darkText}
                >
                    {name}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    className={`${classes.subtitle}
                        ${whiteText ? classes.whiteText : classes.grayText}`}
                >
                    <RoomOutlinedIcon
                        fontSize="small"
                        className={classes.roomIcon}
                    />
                    {/* TODO upload this data dinamicaly */}
                    Targówek,&nbsp;
                    {address}
                </Typography>
            </>
        );
    },
);
