import React from "react";
import * as ROUTES from "@src/config/router";

import { Box, Typography, Container, Link } from "@material-ui/core";
import SignInForm from "@src/components/SignInForm";

export const SignInScreen: React.FC = () => (
    <Container maxWidth="md">
        <Box py={4}>
            <Box mb={4}>
                <Typography component="h2" variant="h4">
                    Zaloguj się
                </Typography>
            </Box>

            <SignInForm onFormSubmit={() => {}} />

            <Typography component="p" variant="body1" color="textSecondary">
                {"Nie masz konta? "}
                <Link href={ROUTES.SIGNUP}>Zarejestruj się</Link>
            </Typography>
        </Box>
    </Container>
);

export default SignInScreen;
