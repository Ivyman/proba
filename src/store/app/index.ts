import AppTypes from "./types";

export interface IAction {
  type: any;
  payload?: any;
}

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
