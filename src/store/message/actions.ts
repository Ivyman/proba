import MessageTypes from "./types";
import { ThunkDispatch } from "@src/types/store";
import { IAction } from "@src/types/store";
import { IMessageData } from "@src/types/message";
import * as effects from "./effects";

export const sendMessage = (messageData: IMessageData) => async (
  dispatch: ThunkDispatch,
) => {
  try {
    dispatch(isFetching());

    await effects.sendMessage(messageData);

    dispatch(sendMessageSuccess());
  } catch (error) {
    dispatch(sendMessageReject());
    // tslint:disable-next-line
    console.error(error);
  }
};

export const isFetching = (): IAction => ({
  type: MessageTypes.MESSAGE_SENDING,
});

export const sendMessageSuccess = (): IAction => ({
  type: MessageTypes.MESSAGE_SEND_SUCCESS,
});

export const sendMessageReject = (): IAction => ({
  type: MessageTypes.MESSAGE_SEND_REJECT,
});

export const setIdleStatus = (): IAction => ({
  type: MessageTypes.MESSAGE_SET_IDLE,
});
