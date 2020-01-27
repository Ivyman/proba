import MessageTypes from "./types";
import { IMessageAction } from ".";
import { ThunkDispatch } from "@src/types/store";
import { IContactFormData } from "@src/types/forms";
import * as effects from "./effects";

export const sendMessage = (formData: IContactFormData) => async (
    dispatch: ThunkDispatch,
) => {
    try {
        dispatch(isFetching());

        await effects.sendMessage(formData);

        dispatch(sendMessageSuccess());
    } catch (error) {
        dispatch(sendMessageReject());
        // tslint:disable-next-line
        console.error(error);
    }
};

export const isFetching = (): IMessageAction => ({
    type: MessageTypes.MESSAGE_SENDING,
});

export const sendMessageSuccess = (): IMessageAction => ({
    type: MessageTypes.MESSAGE_SEND_SUCCESS,
});

export const sendMessageReject = (): IMessageAction => ({
    type: MessageTypes.MESSAGE_SEND_REJECT,
});

export const setIdleStatus = (): IMessageAction => ({
    type: MessageTypes.MESSAGE_SET_IDLE,
});
