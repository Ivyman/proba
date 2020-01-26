import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Container, Box, Typography, Button } from "@material-ui/core";
import { MailOutline as MailOutlineIcon } from "@material-ui/icons";
import Screen from "@src/components/Screen";

const AboutScreen: React.FC = () => (
    <Screen>
        <Container maxWidth="lg">
            <Box py={4}>
                <Box mb={4}>
                    <Typography component="h2" variant="h4">
                        O nas
                    </Typography>
                </Box>

                <Box mb={4}>
                    <Box display="inline-block" m={3}>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="O nas"
                        />
                    </Box>

                    <Typography component="p" variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas quibusdam natus deleniti omnis saepe perspiciatis
                        blanditiis, laborum, provident error exercitationem
                        voluptatum nam sequi fugit quaerat ipsam necessitatibus
                        culpa, beatae soluta.
                    </Typography>

                    <Typography component="p" variant="body1">
                        Masz pytania, czy chcesz nam coś powiedzić...?
                    </Typography>

                    <Box mt={3}>
                        <Button
                            to="/contact"
                            size="large"
                            color="primary"
                            variant="contained"
                            endIcon={<MailOutlineIcon />}
                            component={RouterLink}
                        >
                            napisz do nas
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Screen>
);

export default AboutScreen;
