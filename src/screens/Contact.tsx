import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { EApiStatuses } from "@typing/api";
import { IContactFormData } from "@typing/forms";
import { sendMessage, setIdleStatus } from "@store/message/actions";
import { getMessageApiStatus } from "@store/message/selectors";
import { BRAND } from "@config/constants";
import useDispatch from "@hooks/useDispatch";

import { Container, Typography, Box, Link } from "@material-ui/core";
import ContactForm from "@components/dump/ContactForm";
import Loader from "@components/dump/common/Loader";

export const ContactScreen: React.FC = () => {
    const messageApiStatus: EApiStatuses = useSelector(getMessageApiStatus);

    const dispatchMessage = useDispatch<typeof sendMessage, IContactFormData>(
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
                return <ContactForm onFormSubmit={dispatchMessage} />;
            case EApiStatuses.SUCCESS:
                return <p>Thanks for send message</p>;
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
        <Loader>
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
                        <Link href={`mailto:${BRAND.EMAIL}`}>
                            {BRAND.EMAIL}
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Loader>
    );
};

export default ContactScreen;
