import React from "react";
import { Link } from "react-router-dom";

import { Container } from "@material-ui/core";
import Screen from "@src/components/Screen";

const AboutScreen: React.FC = () => (
    <Screen>
        <Container maxWidth="xl">
            <h1>O nas</h1>

            <img src="https://via.placeholder.com/150" alt="O nas" />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                quibusdam natus deleniti omnis saepe perspiciatis blanditiis,
                laborum, provident error exercitationem voluptatum nam sequi
                fugit quaerat ipsam necessitatibus culpa, beatae soluta.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                quibusdam necessitatibus culpa, beatae soluta.
            </p>

            <p>Masz pytania, czy chcesz nam coś powiedzić...?</p>

            <Link to="/contact">napisz do nas</Link>
        </Container>
    </Screen>
);

export default AboutScreen;
