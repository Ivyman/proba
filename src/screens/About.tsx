import React from "react";
import { Link } from "react-router-dom";

import Screen from "@src/components/Screen";
import Typography from "@src/components/Typography";

const { Head, Text } = Typography;

const AboutScreen: React.FC = () => (
  <Screen>
    <Head as="h1">O nas</Head>

    <img src="https://via.placeholder.com/150" alt="O nas" />

    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam
      natus deleniti omnis saepe perspiciatis blanditiis, laborum, provident
      error exercitationem voluptatum nam sequi fugit quaerat ipsam
      necessitatibus culpa, beatae soluta.
    </Text>

    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam
      necessitatibus culpa, beatae soluta.
    </Text>

    <Text>Masz pytania, czy chcesz nam coś powiedzić...?</Text>

    <Link to="/contact">napisz do nas</Link>
  </Screen>
);

export default AboutScreen;
