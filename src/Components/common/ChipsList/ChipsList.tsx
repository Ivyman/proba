import React, { useCallback, memo } from "react";
import { IRecord } from "@src/types/main";
import useStyles from "./styles";

import { Chip, Box } from "@material-ui/core";

interface IProps {
    options: IRecord[];
    value: string[];
    name: string;
    defaultValue: string;
    onChange: (value: string[], name: string) => void;
}
export const ChipsList: React.FC<IProps> = memo(
    ({ value, onChange, defaultValue, options = [], name = "chipslist" }) => {
        const classes = useStyles();

        const isChecked = useCallback(
            (id) => {
                return !value.length ? id === defaultValue : value.includes(id);
            },
            [value, defaultValue],
        );
        const handleClick = useCallback(
            (id: string) => {
                const newValues: string[] = value.includes(id)
                    ? [...value.filter((item) => item !== id)]
                    : id !== defaultValue
                    ? [...value, id]
                    : [];

                onChange(newValues, name);
            },
            [name, value, defaultValue, onChange],
        );

        return (
            <Box className={classes.root}>
                {options.map(({ id, name }) => (
                    <Chip
                        key={id}
                        variant={isChecked(id) ? "default" : "outlined"}
                        onClick={() => handleClick(id)}
                        label={name}
                        className={classes.chip}
                        color={isChecked(id) ? "primary" : "default"}
                    />
                ))}
            </Box>
        );
    },
);
