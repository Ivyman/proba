import React, { useCallback, memo } from "react";
import { IRecord } from "@src/types/main";
import useStyles from "./styles";

import { Chip, Box } from "@material-ui/core";

interface IProps {
    options: IRecord[];
    value: string[];
    name: string;
    allOptionKey: string;
    onChange: (value: string[], name: string) => void;
}
export const ChipsList: React.FC<IProps> = memo(
    ({ value, onChange, options, allOptionKey, name = "chipslist" }) => {
        const classes = useStyles();

        const isChecked = useCallback(
            key => {
                return !value.length
                    ? key === allOptionKey
                    : value.includes(key);
            },
            [value, allOptionKey],
        );
        const handleClick = useCallback(
            (key: string) => {
                const newValues: string[] = value.includes(key)
                    ? [...value.filter(item => item !== key)]
                    : key !== allOptionKey
                    ? [...value, key]
                    : [];

                onChange(newValues, name);
            },
            [name, value, allOptionKey, onChange],
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
