import { EApiStatuses } from "@typing/api";
import { RootState } from "@typing/store";

export const getMessageApiStatus = (state: RootState): EApiStatuses =>
    state.message.apiStatus;
