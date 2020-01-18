import { RootState } from "@src/types/store";

export const getSidebarStatus = (state: RootState): boolean =>
    state.app.showSidebar;
