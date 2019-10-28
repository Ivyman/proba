import AppTypes from "./types";

export interface IAction {
  type: any;
  payload?: any;
}

export interface IAppState {
  showSidebar: boolean;
  hoveredStudio: string;
}

export const initialState: IAppState = {
  showSidebar: false,
  hoveredStudio: "",
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

    case AppTypes.APP_SET_HOVERED_STUDIO:
      return {
        ...state,
        hoveredStudio: payload,
      };
    default:
      return state;
  }
};
