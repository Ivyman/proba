import React, { memo, useCallback, useState, ChangeEvent } from "react";
import { IFilter } from "@src/types/filters";
import useStyles from "./styles";

import {
    FormControl,
    InputLabel,
    Select as SelectUI,
    MenuItem,
} from "@material-ui/core";

interface IProps {
    label: string;
    values: Array<IFilter>;
    labelWidth: number;
    setDefault?: boolean;
    noneOption?: string;
    disabled?: boolean;
    name?: string;
    onChange: (event: ChangeEvent<{ value: unknown }>, name: string) => void;
}

export const Select: React.FC<IProps> = memo(
    ({
        label,
        values,
        name,
        onChange,
        labelWidth,
        setDefault,
        noneOption,
        disabled,
    }) => {
        const [chosenValue, setChoosenValue] = useState<string>(
            setDefault ? values[0].key : "",
        );

        const classes = useStyles();

        const handleChange = useCallback(
            (event: ChangeEvent<{ value: unknown }>) => {
                onChange(event, Boolean(name) ? (name as string) : "select");
                setChoosenValue(event.target.value as string);
            },
            [onChange, setChoosenValue, name],
        );

        return (
            <FormControl
                variant="outlined"
                className={`${classes.root} ${
                    Boolean(disabled) ? classes.isDisabled : ""
                }`}
            >
                <InputLabel className={classes.label}>{label}</InputLabel>
                <SelectUI
                    disabled={disabled}
                    labelWidth={labelWidth}
                    value={chosenValue}
                    onChange={handleChange}
                    classes={{ root: classes.select }}
                >
                    {Boolean(noneOption) && (
                        <MenuItem value="">
                            <em>{noneOption}</em>
                        </MenuItem>
                    )}
                    {values.map(({ name, key }) => (
                        <MenuItem key={key} value={key}>
                            {name}
                        </MenuItem>
                    ))}
                </SelectUI>
            </FormControl>
        );
    },
);
