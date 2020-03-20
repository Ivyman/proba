import React, { memo, useCallback, ChangeEvent } from "react";
import { IRecord } from "@src/types/main";
import useStyles from "./styles";

import {
    FormControl,
    InputLabel,
    Select,
    Checkbox,
    MenuItem,
    ListItemText,
    Input,
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
            (event: ChangeEvent<{ value: unknown }>) => onChange(event, name),
            [name, onChange],
        );

        return (
            // <FormControl
            //     variant="outlined"
            //     className={`${classes.root} ${
            //         !disabled ? "" : classes.isDisabled
            //     }`}
            // >
            //     <InputLabel className={classes.label}>{label}</InputLabel>
            //     <SelectUI
            //         name={name}
            //         disabled={disabled}
            //         labelWidth={labelWidth}
            //         value={value}
            //         onChange={handleChange}
            //         classes={{ root: classes.select }}
            //     >
            //         {noneOption && (
            //             <MenuItem value="">
            //                 <em>{noneOption}</em>
            //             </MenuItem>
            //         )}
            //         {options.map(({ name, key }) => (
            //             <MenuItem key={key} value={key}>
            //                 {name}
            //             </MenuItem>
            //         ))}
            //     </SelectUI>
            // </FormControl>
            <FormControl
                variant="outlined"
                className={`${classes.root} ${
                    !disabled ? "" : classes.isDisabled
                }`}
            >
                <InputLabel className={classes.label}>{label}</InputLabel>
                <Select
                    multiple
                    // value={personName}
                    disabled={disabled}
                    value={"Wybrano 0"}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={selected => (selected as string[]).join(", ")}
                    // MenuProps={MenuProps}
                >
                    {options.map(({ key, name }: IRecord) => (
                        <MenuItem key={key} value={name}>
                            {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
                            <Checkbox />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    },
);
