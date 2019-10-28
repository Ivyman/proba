import AppTypes from "./types";

export const switchSidebar = () => ({
  type: AppTypes.APP_SIDEBAR_SWITCH,
});

export const setHoveredStudio = (id: string) => ({
  type: AppTypes.APP_SET_HOVERED_STUDIO,
  payload: id,
});
