import React, { memo, useCallback, ChangeEvent } from "react";
import useStyles from "./styles";

import { Box, TextField, CircularProgress } from "@material-ui/core";

interface IProps {
    value: string;
    name?: string;
    showThrobber?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>, name: string) => void;
}

export const SearchField: React.FC<IProps> = memo(
    ({ value, name = "input", onChange, showThrobber }) => {
        const classes = useStyles();

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                onChange(event, name);
            },
            [onChange, name],
        );

        return (
            <TextField
                fullWidth
                size="small"
                label="Wpisz nazwe lub adres"
                variant="outlined"
                value={value}
                name={name}
                className={classes.root}
                onChange={handleChange}
                InputProps={{
                    endAdornment: showThrobber && (
                        <Box display="flex" pl={1}>
                            <CircularProgress size={25} />
                        </Box>
                    ),
                }}
            />
        );
    },
);
