import React, { memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm, OnSubmit } from "react-hook-form";
import { ILoginFormData } from "@typing/forms";
import { loginValidationScheme } from "./validation";
import * as ROUTES from "@config/router";
import useStyles from "./styles";

import { TextField, Button, Box } from "@material-ui/core";
import { ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons";

interface IProps {
    onFormSubmit: OnSubmit<ILoginFormData>;
}

export const SignUpForm: React.FC<IProps> = memo(({ onFormSubmit }) => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm<ILoginFormData>({
        validationSchema: loginValidationScheme,
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <Box mb={3}>
                <TextField
                    fullWidth
                    className={classes.field}
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="text"
                    error={!!errors.email}
                    inputRef={register}
                />
                {errors.email && (
                    <Box color="error.main" component="p" m={0.5}>
                        {errors.email.message}
                    </Box>
                )}
            </Box>

            <Box display="flex" mb={4} justifyContent="space-between">
                <Button
                    component={RouterLink}
                    to={ROUTES.CATALOG}
                    startIcon={<ArrowBackIosIcon />}
                >
                    Powrót do katalogu
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                >
                    Zarejestruj
                </Button>
            </Box>
        </form>
    );
});
