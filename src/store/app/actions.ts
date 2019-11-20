import { IAction } from "@src/types/store";
import AppTypes from "./types";

export const switchSidebar = (): IAction => ({
  type: AppTypes.APP_SIDEBAR_SWITCH,
});
