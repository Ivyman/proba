import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@src/hooks/dispatch";
import { EApiStatuses } from "@src/types/api";
import { IMessageData } from "@src/types/message";
import { sendMessage, setIdleStatus } from "@src/store/message/actions";
import { getMessageApiStatus } from "@src/store/message/selectors";
import { Brand } from "@src/Confing";

import { Container, Typography, Box, Link } from "@material-ui/core";
import ContactForm from "@src/components/ContactForm";
import Screen from "@src/components/Screen";

export const ContactScreen: React.FC = () => {
    const messageApiStatus: EApiStatuses = useSelector(getMessageApiStatus);

    const dispatchMessage = useDispatch<typeof sendMessage, IMessageData>(
        sendMessage,
    );
    const dispatchIdleStatus = useDispatch<typeof setIdleStatus, undefined>(
        setIdleStatus,
    );

    const renderContactForm = () => {
        switch (messageApiStatus) {
            case EApiStatuses.ERROR:
                return "error";
            case EApiStatuses.IDLE:
                return <ContactForm onSubmit={dispatchMessage} />;
            case EApiStatuses.SUCCESS:
                return <p>Thanks for send message to as</p>;
            case EApiStatuses.RUNNING:
                return <p>Sending...</p>;
        }
    };

    useEffect(() => {
        if (messageApiStatus !== EApiStatuses.IDLE) {
            dispatchIdleStatus();
        }
    }, [dispatchIdleStatus, messageApiStatus]);

    return (
        <Screen>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Box mb={4}>
                        <Typography component="h2" variant="h4">
                            Napisz do nas
                        </Typography>
                    </Box>

                    <Box mb={4}>
                        <Typography component="p" variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Porro mollitia vero ducimus eligend iLorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Porro mollitia vero ducimus eligendi
                        </Typography>
                    </Box>

                    {renderContactForm()}

                    <Typography
                        component="p"
                        variant="body1"
                        color="textSecondary"
                    >
                        {"Lub wyślij wiedomość pod adress "}
                        <Link href={`mailto:${Brand.email}`}>
                            {Brand.email}
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Screen>
    );
};

export default ContactScreen;
