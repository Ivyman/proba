import React from "react";

import { Container, Box, Typography } from "@material-ui/core";
import Loader from "@components/dump/common/Loader";

const TermsScreen: React.FC = () => (
    <Loader>
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
    </Loader>
);

export default TermsScreen;
