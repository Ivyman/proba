import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@src/hooks/dispatch";

import { EApiStatuses } from "@src/types/api";
import { sendMessage, setIdleStatus } from "@src/store/message/actions";
import { getMessageApiStatus } from "@src/store/message/selectors";
import Error from "@src/components/Error";
import ContactForm from "@src/components/ContactForm";
import Screen from "@src/components/Screen";
import Typography from "@src/components/Typography";

const { Head, Text } = Typography;

export const ContactScreen: React.FC = () => {
  const dispatchMessage = useDispatch(sendMessage);
  const dispatchIdleStatus = useDispatch(setIdleStatus);

  const messageApiStatus: EApiStatuses = useSelector(getMessageApiStatus);

  const renderContactForm = () => {
    switch (messageApiStatus) {
      case EApiStatuses.ERROR:
        return <Error />;
      case EApiStatuses.IDLE:
        return <ContactForm onSubmit={dispatchMessage} />;
      case EApiStatuses.SUCCESS:
        return <Text>Thanks for send message to as</Text>;
      case EApiStatuses.RUNNING:
        return <Text>Sending...</Text>;
    }
  };

  useEffect(() => {
    if (messageApiStatus !== EApiStatuses.IDLE) {
      dispatchIdleStatus();
    }
  }, []);

  return (
    <Screen>
      <Head as="h1">Napisz do nas</Head>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro mollitia
        vero ducimus eligendi
      </Text>

      {renderContactForm()}

      <Text>
        Lub wyślij wiedomość pod adress
        <a href="mailto:mail@gmail.com">probamail@gmail.com</a>
      </Text>
    </Screen>
  );
};

export default ContactScreen;
