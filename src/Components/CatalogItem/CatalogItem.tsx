import React, { MouseEvent, useState, memo, useCallback } from "react";
import { IStudio } from "@src/types/studio";
import useStyles from "./styles";

import { Card, CardContent, CardMedia, Chip } from "@material-ui/core";
import { MonetizationOn as MonetizationOnIcons } from "@material-ui/icons";
import Title from "@src/components/common/Title";

interface IProps {
    studioData: IStudio;
    hoverdStudioId: string;
    price: string;
    onItemClick: (id: string) => void;
    onHoverStudio: (id?: string) => void;
}

export const CatalogItem: React.FC<IProps> = memo(
    ({ studioData, hoverdStudioId, price, onHoverStudio, onItemClick }) => {
        const [hover, setHover] = useState();

        const classes = useStyles();

        const isHovered = useCallback(
            (hoveredId: string) => hoverdStudioId === hoveredId,
            [hoverdStudioId],
        );

        const handleClick = (itemId: string) => {
            onHoverStudio();
            onItemClick(itemId);
        };
        const handleMouseOver = (
            event: MouseEvent<HTMLElement>,
            studioId: string,
        ) => {
            if (hover === event.currentTarget) {
                return;
            }
            setHover(event.currentTarget);
            onHoverStudio(studioId);
        };
        const handleMouseLeave = () => {
            setHover(null);
            onHoverStudio();
        };

        const {
            id,
            address: { street, buildingNumber },
            name,
            logo,
        } = studioData;

        return (
            <Card
                onClick={() => handleClick(id)}
                onMouseOver={(event: MouseEvent<HTMLElement>) =>
                    handleMouseOver(event, id)
                }
                onMouseLeave={handleMouseLeave}
                className={`${classes.root} ${
                    isHovered(id) ? classes.hoveredItem : ""
                }`}
            >
                <CardMedia
                    image={logo}
                    title={name}
                    className={classes.cardMedia}
                />

                <CardContent className={classes.cardContent}>
                    <Title
                        name={name}
                        address={`${street} ${buildingNumber}`}
                    />
                </CardContent>

                <Chip
                    label={price}
                    size="small"
                    icon={<MonetizationOnIcons fontSize="small" />}
                    className={classes.chip}
                />
            </Card>
        );
    },
);
