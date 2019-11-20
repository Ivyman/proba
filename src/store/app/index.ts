import { IAction } from "@src/types/store";
import AppTypes from "./types";

export interface IAppState {
  showSidebar: boolean;
}

export const initialState: IAppState = {
  showSidebar: false,
};

export default (
  state: IAppState = initialState,
  { type, payload }: IAction,
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
