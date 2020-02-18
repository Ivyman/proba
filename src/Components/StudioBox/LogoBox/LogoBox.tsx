import React, { memo } from "react";
import useStyles from "./styles";
import { IStudio } from "@src/types/studio";

import { Box } from "@material-ui/core";
import Title from "@src/components/common/Title";

interface IProps {
    studioData: IStudio;
}

export const LogoBox: React.FC<IProps> = memo(
    ({ studioData: { logo, name, address } }) => {
        const classes = useStyles();

        return (
            <Box className={classes.root}>
                <Box className={classes.image}>
                    <img src={logo} alt="logo" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Title
                        large
                        name={name}
                        address={`${address.street} ${address.buildingNumber}`}
                    />
                </Box>
            </Box>
        );
    },
);
