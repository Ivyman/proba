import MessageTypes from "./types";
import { EApiStatuses } from "@src/types/api";
import { IAction } from "@src/types/store";

export interface IMessageAction extends IAction<MessageTypes> {}

export interface IMessageState {
    apiStatus: EApiStatuses;
}

export const initialState: IMessageState = {
    apiStatus: EApiStatuses.IDLE,
};

export default (
    state: IMessageState = initialState,
    { type }: IMessageAction,
): IMessageState => {
    switch (type) {
        case MessageTypes.MESSAGE_SENDING:
            return {
                ...state,
                apiStatus: EApiStatuses.RUNNING,
            };

        case MessageTypes.MESSAGE_SEND_SUCCESS:
            return {
                ...state,
                apiStatus: EApiStatuses.SUCCESS,
            };

        case MessageTypes.MESSAGE_SEND_REJECT:
            return {
                ...state,
                apiStatus: EApiStatuses.ERROR,
            };

        case MessageTypes.MESSAGE_SET_IDLE:
            return {
                ...state,
                apiStatus: EApiStatuses.IDLE,
            };

        default:
            return state;
    }
};
