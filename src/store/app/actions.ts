import { IAppAction } from ".";
import AppTypes from "./types";

export const switchSidebar = (): IAppAction => ({
    type: AppTypes.APP_SIDEBAR_SWITCH,
});
