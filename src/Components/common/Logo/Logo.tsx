import React, { memo } from "react";
import { Brand } from "@src/config/constants";
import useStyles from "./styles";

import { ReactComponent as LogoIcon } from "@src/assets/logo.svg";
import { Box } from "@material-ui/core";

interface IProps {
    small?: boolean;
}

const { nameWithDomain: Name } = Brand;

export const Logo: React.FC<IProps> = memo(({ small }) => {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" component="span">
            <LogoIcon />
            <span className={classes.brandName}>{Name}</span>
        </Box>
    );
});
