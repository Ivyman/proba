import React, { memo, useCallback, ChangeEvent } from "react";
import { IRecord } from "@src/types/main";
import useStyles from "./styles";

import {
    FormControl,
    InputLabel,
    Select as SelectUI,
    MenuItem,
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
    onChange: (value: string, name: string) => void;
}

export const Select: React.FC<IProps> = memo(
    ({
        label,
        value,
        labelWidth,
        noneOption,
        disabled,
        options = [],
        name = "select",
        onChange,
    }) => {
        const classes = useStyles();

        const handleChange = useCallback(
            (event: ChangeEvent<{ value: unknown }>) =>
                onChange(event.target.value as string, name),
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
                <SelectUI
                    name={name}
                    disabled={disabled}
                    labelWidth={labelWidth}
                    value={value}
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
                            {name}
                        </MenuItem>
                    ))}
                </SelectUI>
            </FormControl>
        );
    },
);
