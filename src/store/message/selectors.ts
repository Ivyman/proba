import { EApiStatuses } from "@src/types/api";
import { RootState } from "@src/types/store";

export const getMessageApiStatus = (state: RootState): EApiStatuses =>
    state.message.apiStatus;
