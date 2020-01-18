import apiEndpoint, { URLS } from "@src/utils/api";
import { IMessageData } from "@src/types/message";

export const sendMessage = async (messageData: IMessageData) => {
    const params = { ...messageData };

    return await apiEndpoint.post(URLS.message, { params });
};
