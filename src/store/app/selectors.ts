import { RootState } from "@typing/store";

export const getSidebarStatus = (state: RootState): boolean =>
    state.app.showSidebar;
