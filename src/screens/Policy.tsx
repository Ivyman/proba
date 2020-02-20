import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Container, Box, Typography, Button } from "@material-ui/core";
import { MailOutline as MailOutlineIcon } from "@material-ui/icons";
import Screen from "@src/components/Screen";

const TermsScreen: React.FC = () => (
    <Screen>
        <Container maxWidth="lg">
            <Box py={4}>
                <Box mb={4}>
                    <Typography component="h2" variant="h4">
                        Policy
                    </Typography>
                </Box>

                <Box mb={4}>
                    <Typography component="p" variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas quibusdam natus deleniti omnis saepe perspiciatis
                        blanditiis, laborum, provident error exercitationem
                        voluptatum nam sequi fugit quaerat ipsam necessitatibus
                        culpa, beatae soluta.
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Screen>
);

export default TermsScreen;
