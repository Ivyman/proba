import React, { MouseEvent, useState, memo, useCallback } from "react";
import { IStudio } from "@typing/studio";
import { IIdNameRecord } from "@typing/api";
import useStyles from "./styles";

import { Card, CardContent, CardMedia, Chip, Box } from "@material-ui/core";
import Title from "@components/dump/common/Title";

interface IProps {
    studioData: IStudio;
    hoverdStudioId: string;
    onItemClick: (id: string) => void;
    onHoverStudio: (id?: string) => void;
}

export const CatalogItem: React.FC<IProps> = memo(
    ({ studioData, hoverdStudioId, onHoverStudio, onItemClick }) => {
        const [hover, setHover] = useState<
            (EventTarget & HTMLElement) | null
        >();

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
            address: {
                street,
                buildingNumber,
                cityArea: { name: cityAreaName },
                city: { name: cityName },
            },
            name,
            logo,
            services,
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
                        title={name}
                        subtitle={`${cityName}, ${cityAreaName}, ${street} ${buildingNumber}`}
                    >
                        <Box className={classes.chipList}>
                            {services.map(({ id, name }: IIdNameRecord) => (
                                <Chip
                                    key={id}
                                    className={classes.chip}
                                    label={name}
                                    size="small"
                                />
                            ))}
                        </Box>
                    </Title>
                </CardContent>
            </Card>
        );
    },
);
