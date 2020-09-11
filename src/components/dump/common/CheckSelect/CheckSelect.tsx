import React, { memo, useCallback, ChangeEvent } from "react";
import { IRecord } from "@typing/main";
import useStyles from "./styles";

import {
    FormControl,
    InputLabel,
    Select,
    Checkbox,
    MenuItem,
    ListItemText,
} from "@material-ui/core";

interface IProps {
    label: string;
    options: IRecord[];
    value: string;
    labelWidth: number;
    setDefault?: boolean;
    noneOption?: string;
    disabled?: boolean;
    name?: string;
    onChange: (event: ChangeEvent<{ value: unknown }>, name: string) => void;
}

// TODO it doesn't work, improve
export const CheckSelect: React.FC<IProps> = memo(
    ({
        label,
        options,
        value,
        name = "select",
        onChange,
        labelWidth,
        noneOption,
        disabled,
    }) => {
        const classes = useStyles();

        const handleChange = useCallback(
            (event: ChangeEvent<{ value: unknown }>) => {
                onChange(event, name);
            },
            [name, onChange],
        );

        return (
            <FormControl
                variant="outlined"
                className={`${classes.root} ${
                    !disabled ? "" : classes.isDisabled
                }`}
            >
                <InputLabel className={classes.label}>{label}</InputLabel>
                <Select
                    multiple
                    name={name}
                    disabled={disabled}
                    labelWidth={labelWidth}
                    value={[value, value]}
                    onChange={handleChange}
                    classes={{ root: classes.select }}
                >
                    {noneOption && (
                        <MenuItem value="">
                            <em>{noneOption}</em>
                        </MenuItem>
                    )}
                    {options.map(({ name, id }: IRecord) => (
                        <MenuItem key={id} value={id}>
                            <Checkbox checked={value === id} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    },
);
