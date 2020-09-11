import React from "react";
import * as ROUTES from "@config/router";

import { Box, Typography, Container, Link } from "@material-ui/core";
import SignUpForm from "@components/dump/SignUpForm";

export const SignUpScreen: React.FC = () => (
    <Container maxWidth="md">
        <Box py={4}>
            <Box mb={4}>
                <Typography component="h2" variant="h4">
                    Zarejestruj się
                </Typography>
            </Box>

            <SignUpForm onFormSubmit={() => {}} />

            <Typography component="p" variant="body1" color="textSecondary">
                {"Masz konto? "}
                <Link href={ROUTES.SIGNIN}>Załoguj się</Link>
            </Typography>
        </Box>
    </Container>
);

export default SignUpScreen;
