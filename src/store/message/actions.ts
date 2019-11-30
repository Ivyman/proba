import MessageTypes from "./types";
import { ThunkDispatch } from "@src/types/store";
import { IAction } from "@src/types/store";
import * as effects from "./effects";

export const fetchStudios = () => async (dispatch: ThunkDispatch) => {
  try {
    dispatch(isFetching());

    const xxx = await effects.sendMessage();

    console.log(xxx);

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
