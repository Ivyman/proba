import { RootState } from "@src/types/store";

export const getSidebarStatus = (state: RootState) => state.app.showSidebar;

export const getHoverdStudioId = (state: RootState) => state.app.hoveredStudio;
