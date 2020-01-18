import AppTypes from "./types";
import { IAction } from "@src/types/store";

export interface IAppAction extends IAction<AppTypes> {}

export interface IAppState {
    showSidebar: boolean;
}

export const initialState: IAppState = {
    showSidebar: false,
};

export default (
    state: IAppState = initialState,
    { type, payload }: IAppAction,
): IAppState => {
    switch (type) {
        case AppTypes.APP_SIDEBAR_SWITCH:
            return {
                ...state,
                showSidebar: !state.showSidebar,
            };

        default:
            return state;
    }
};
