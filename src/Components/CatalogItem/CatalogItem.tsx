import React, { MouseEvent, useState, memo } from "react";
import { Link } from "react-router-dom";
import { IStudio } from "@src/types/studio";
import useStyles from "./styles";

import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { Room as RoomIcon } from "@material-ui/icons";

interface IProps {
    studioData: IStudio;
    onHoveredStudio: (id?: string) => void;
    onOpenStudio: (id?: string) => void;
}

export const CatalogItem: React.FC<IProps> = memo(
    ({ studioData, onHoveredStudio, onOpenStudio }) => {
        const [hover, setHover] = useState();

        const classes = useStyles();

        const handleClick = () => {
            onHoveredStudio();
            onOpenStudio(studioData.id);
        };
        const handleMouseOver = (
            event: MouseEvent<HTMLElement>,
            studioId: string,
        ) => {
            if (hover === event.currentTarget) {
                return;
            }
            setHover(event.currentTarget);
            onHoveredStudio(studioId);
        };
        const handleMouseLeave = () => {
            setHover(null);
            onHoveredStudio();
        };

        const {
            id,
            address: { city, zipcode, street },
            name,
            logo,
        } = studioData;

        return (
            <Card
                onMouseOver={(event: MouseEvent<HTMLElement>) =>
                    handleMouseOver(event, id)
                }
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                className={classes.root}
            >
                <Link to={`/catalog/${id}`} className={classes.linkWrapper}>
                    <CardMedia
                        image={logo}
                        title={name}
                        className={classes.cardMedia}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography
                            component="h6"
                            variant="h6"
                            color="textPrimary"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            className={classes.address}
                        >
                            <RoomIcon
                                fontSize="small"
                                className={classes.roomIcon}
                            />
                            {city}, {zipcode}, {street}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        );
    },
);
