import React, { memo } from "react";
import useStyles from "./styles";
import { IStudio } from "@src/types/studio";

import { Box, Typography } from "@material-ui/core";

interface IProps {
    studioData: IStudio;
}

export const LogoBox: React.FC<IProps> = memo(
    ({ studioData: { logo, name, address } }) => {
        const classes = useStyles();

        return (
            <Box className={classes.root}>
                <Box className={classes.imageWrapper}>
                    <img src={logo} alt="logo" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        className={classes.studioName}
                    >
                        {name}
                    </Typography>
                    <Typography variant="h6" component="h3">
                        {name}
                    </Typography>
                </Box>
            </Box>
        );
    },
);
