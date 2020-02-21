import React, { memo, useState, useCallback, ChangeEvent } from "react";
import useStyles from "./styles";

import { Box, TextField, CircularProgress } from "@material-ui/core";

interface IProps {
    onChange?: any;
    showThrobber?: boolean;
}

export const SearchField: React.FC<IProps> = memo(
    ({ onChange, showThrobber }) => {
        const [searchString, setSearchString] = useState<string>();

        const classes = useStyles();

        const handleChange = useCallback(
            (event: ChangeEvent<{ value: unknown }>) => {
                const chosenValue = event.target.value as string;

                setSearchString(chosenValue);
                onChange(chosenValue);
            },
            [onChange, setSearchString],
        );

        return (
            <TextField
                fullWidth
                size="small"
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
