import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@src/hooks/dispatch";
import { EApiStatuses } from "@src/types/api";
import { IMessageData } from "@src/types/message";
import { sendMessage, setIdleStatus } from "@src/store/message/actions";
import { getMessageApiStatus } from "@src/store/message/selectors";

import ContactForm from "@src/components/ContactForm";
import Screen from "@src/components/Screen";

export const ContactScreen: React.FC = () => {
    const dispatchMessage = useDispatch<typeof sendMessage, IMessageData>(
        sendMessage,
    );
    const dispatchIdleStatus = useDispatch<typeof setIdleStatus, undefined>(
        setIdleStatus,
    );
    const messageApiStatus: EApiStatuses = useSelector(getMessageApiStatus);

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
            <h1>Napisz do nas</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                mollitia vero ducimus eligendi
            </p>

            {renderContactForm()}

            <p>
                Lub wyślij wiedomość pod adress
                <a href="mailto:mail@gmail.com">probamail@gmail.com</a>
            </p>
        </Screen>
    );
};

export default ContactScreen;
