import { RootState } from "@src/types/store";

export const getSidebarStatus = (state: RootState) => state.app.showSidebar;
