import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@src/hooks/dispatch";

import { EApiStatuses } from "@src/types/api";
import { sendMessage } from "@src/store/message/actions";
import { getMessageApiStatus } from "@src/store/message/selectors";
import ContactForm from "@src/components/ContactForm";
import Screen from "@src/components/Screen";
import Typography from "@src/components/Typography";

const { Head, Text } = Typography;

export const ContactScreen: React.FC = () => {
  const dispatchMessage = useDispatch(sendMessage);

  const messageApiStatus: EApiStatuses = useSelector(getMessageApiStatus);

  return (
    <Screen>
      <Head as="h1">Napisz do nas</Head>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro mollitia
        vero ducimus eligendi
      </Text>

      <ContactForm onSubmit={dispatchMessage} />

      <Text>
        Lub wyślij wiedomość pod adress
        <a href="mailto:mail@gmail.com">probamail@gmail.com</a>
      </Text>
    </Screen>
  );
};

export default ContactScreen;
