import React, { memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { IContactFormData } from "@src/types/forms";
import { useForm, OnSubmit } from "react-hook-form";
import { contactValidationScheme } from "@src/utils/formsValidation";
import * as ROUTES from "@src/config/router";
import useStyles from "./styles";

import { TextField, Button, Box, Grid } from "@material-ui/core";
import { ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons";

interface IProps {
    onFormSubmit: OnSubmit<IContactFormData>;
}

export const ContactForm: React.FC<IProps> = memo(({ onFormSubmit }) => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm<IContactFormData>({
        validationSchema: contactValidationScheme,
    });

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <Box mb={3}>
                <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            className={classes.field}
                            label="Twoje imię"
                            variant="outlined"
                            name="name"
                            type="text"
                            inputRef={register}
                        />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            className={classes.field}
                            label={
                                <>
                                    {"E-mail "}
                                    <Box
                                        color="secondary.main"
                                        component="span"
                                    >
                                        *
                                    </Box>
                                </>
                            }
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
                    </Grid>
                </Grid>
            </Box>

            <Box mb={3}>
                <TextField
                    fullWidth
                    label={
                        <>
                            {"Temat "}
                            <Box color="secondary.main" component="span">
                                *
                            </Box>
                        </>
                    }
                    className={classes.field}
                    variant="outlined"
                    type="text"
                    name="subject"
                    error={!!errors.subject}
                    inputRef={register}
                />
                {errors.subject && (
                    <Box color="error.main" component="p" m={0.5}>
                        {errors.subject.message}
                    </Box>
                )}
            </Box>

            <Box mb={3}>
                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    className={classes.field}
                    label={
                        <>
                            {"Wiadomość "}
                            <Box color="secondary.main" component="span">
                                *
                            </Box>
                        </>
                    }
                    variant="outlined"
                    type="text"
                    name="message"
                    error={!!errors.message}
                    inputRef={register}
                />
                {errors.message && (
                    <Box color="error.main" component="p" m={0.5}>
                        {errors.message.message}
                    </Box>
                )}
            </Box>

            <Box display="flex" mb={4} justifyContent="space-between">
                <Button
                    component={RouterLink}
                    to={ROUTES.CATALOG}
                    startIcon={<ArrowBackIosIcon />}
                >
                    Katałog
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                >
                    Wyślij
                </Button>
            </Box>
        </form>
    );
});
