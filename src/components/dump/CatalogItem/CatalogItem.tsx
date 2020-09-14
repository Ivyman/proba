import React, { MouseEvent, useState, memo, useCallback } from "react";
import { IUnit } from "@typing/unit";
import { IIdNameRecord } from "@typing/api";
import useStyles from "./styles";

import { Card, CardContent, CardMedia, Chip, Box } from "@material-ui/core";
import Title from "@components/dump/common/Title";

interface IProps {
    unitData: IUnit;
    hoverdUnitId: string;
    onItemClick: (id: string) => void;
    onHoverUnit: (id?: string) => void;
}

export const CatalogItem: React.FC<IProps> = memo(
    ({ unitData, hoverdUnitId, onHoverUnit, onItemClick }) => {
        const [hover, setHover] = useState<
            (EventTarget & HTMLElement) | null
        >();

        const classes = useStyles();

        const isHovered = useCallback(
            (hoveredId: string) => hoverdUnitId === hoveredId,
            [hoverdUnitId],
        );

        const handleClick = (itemId: string) => {
            onHoverUnit();
            onItemClick(itemId);
        };
        const handleMouseOver = (
            event: MouseEvent<HTMLElement>,
            unitId: string,
        ) => {
            if (hover === event.currentTarget) {
                return;
            }
            setHover(event.currentTarget);
            onHoverUnit(unitId);
        };
        const handleMouseLeave = () => {
            setHover(null);
            onHoverUnit();
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
        } = unitData;

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
