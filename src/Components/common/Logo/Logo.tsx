import React, { memo } from "react";
import { BRAND } from "@src/config/constants";
import useStyles from "./styles";

import LogoIcon from "@src/assets/logo.svg";
import { Box } from "@material-ui/core";

interface IProps {
    small?: boolean;
}

export const Logo: React.FC<IProps> = memo(({ small }) => {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" component="span">
            <img src={LogoIcon} alt="Logo" />
            <span className={classes.brandName}>{BRAND.NAME_WITH_DOMAIN}</span>
        </Box>
    );
});
