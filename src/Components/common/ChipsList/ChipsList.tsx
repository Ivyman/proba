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
    ({ value, onChange, options, defaultValue, name = "chipslist" }) => {
        const classes = useStyles();

        const isChecked = useCallback(
            (key) => {
                return !value.length
                    ? key === defaultValue
                    : value.includes(key);
            },
            [value, defaultValue],
        );
        const handleClick = useCallback(
            (key: string) => {
                const newValues: string[] = value.includes(key)
                    ? [...value.filter((item) => item !== key)]
                    : key !== defaultValue
                    ? [...value, key]
                    : [];

                onChange(newValues, name);
            },
            [name, value, defaultValue, onChange],
        );

        return (
            <Box className={classes.root}>
                {options.map(({ key, name }) => (
                    <Chip
                        key={key}
                        variant={isChecked(key) ? "default" : "outlined"}
                        onClick={() => handleClick(key)}
                        label={name}
                        className={classes.chip}
                        color={isChecked(key) ? "primary" : "default"}
                    />
                ))}
            </Box>
        );
    },
);
