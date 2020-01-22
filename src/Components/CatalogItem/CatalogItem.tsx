import React, { MouseEvent, useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { IStudio } from "@src/types/studio";
import useStyles from "./styles";

import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { RoomOutlined as RoomOutlinedIcon } from "@material-ui/icons";

interface IProps {
    studioData: IStudio;
    hoverdStudioId: string;
    onHoveredStudio: (id?: string) => void;
    onOpenStudio: (id?: string) => void;
}

export const CatalogItem: React.FC<IProps> = memo(
    ({ studioData, onHoveredStudio, onOpenStudio, hoverdStudioId }) => {
        const [hover, setHover] = useState();

        const classes = useStyles();

        const isHovered = useCallback(
            (hoveredId: string) => hoverdStudioId === hoveredId,
            [hoverdStudioId],
        );

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
            address: { street, buildingNumber },
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
                className={`${classes.root} ${
                    isHovered(id) ? classes.hoveredItem : ""
                }`}
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
                            <RoomOutlinedIcon
                                fontSize="small"
                                className={classes.roomIcon}
                            />
                            {street} {buildingNumber}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
        );
    },
);
