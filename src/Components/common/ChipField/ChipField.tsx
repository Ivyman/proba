import React, { useCallback, memo } from "react";
import useStyles from "./styles";

import { FormControlLabel, Radio, Chip } from "@material-ui/core";

interface IProps {
    label: string;
    value: any;
    checked: any;
}

export const ChipField: React.FC<IProps> = memo(({ label, value, checked }) => {
    const classes = useStyles();

    const handleClick = useCallback(() => {}, []);

    return (
        <FormControlLabel
            label={
                <Chip
                    variant={checked ? "default" : "outlined"}
                    label={label}
                    onClick={handleClick}
                    color={checked ? "primary" : "default"}
                />
            }
            value={value}
            checked={checked}
            className={classes.root}
            control={<Radio className={classes.radio} />}
        />
    );
});
