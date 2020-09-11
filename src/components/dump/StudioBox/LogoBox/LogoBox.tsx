import React, { memo } from "react";
import useStyles from "./styles";
import { IStudio } from "@typing/studio";

import { Box } from "@material-ui/core";
import Title from "@components/dump/common/Title";

interface IProps {
    studioData: IStudio;
}

export const LogoBox: React.FC<IProps> = memo(
    ({
        studioData: {
            logo,
            name,
            address: {
                cityArea: { name: cityAreaName },
                city: { name: cityName },
                street,
                buildingNumber,
            },
        },
    }) => {
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
                        title={name}
                        subtitle={`${cityName}, ${cityAreaName}, ${street} ${buildingNumber}`}
                    />
                </Box>
            </Box>
        );
    },
);
