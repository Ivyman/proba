import React, { memo, ChangeEvent, useState } from "react";
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
    onChange: (event: any) => void;
    setDefault?: boolean;
    noneOption?: string;
    disabled?: boolean;
}

export const Select: React.FC<IProps> = memo(
    ({
        label,
        values,
        onChange,
        labelWidth,
        setDefault,
        noneOption,
        disabled,
    }) => {
        const [chosenValue, setChoosenValue] = useState<string>(
            setDefault ? values[0].name : "",
        );

        const classes = useStyles();

        const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
            const chosenValue = event.target.value as string;

            if (!Boolean(chosenValue)) {
                return setChoosenValue(chosenValue);
            }

            onChange(
                (values.find(item => item.name === chosenValue) as IFilter).key,
            );
            setChoosenValue(chosenValue);
        };

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
                        <MenuItem key={key} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </SelectUI>
            </FormControl>
        );
    },
);
