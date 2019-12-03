import apiEndpoint, { URLS } from "@src/services/api";
import { IMessageData } from "@src/types/message";

export const sendMessage = async (messageData: IMessageData) => {
  const params = { ...messageData };
  return await apiEndpoint.post(URLS.message, { params });
};
