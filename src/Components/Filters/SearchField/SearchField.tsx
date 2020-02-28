import React, { memo, useState, useCallback, ChangeEvent } from "react";
import useStyles from "./styles";

import { Box, TextField, CircularProgress } from "@material-ui/core";

interface IProps {
    name?: string;
    showThrobber?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: React.FC<IProps> = memo(
    ({ onChange, showThrobber, name }) => {
        const [searchString, setSearchString] = useState<string>("");

        const classes = useStyles();

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                setSearchString(event.target.value);
                onChange(event);
            },
            [onChange, setSearchString],
        );

        return (
            <TextField
                fullWidth
                size="small"
                name={Boolean(name) ? name : "input"}
                label="Wpisz nazwe lub adres"
                variant="outlined"
                value={searchString}
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
