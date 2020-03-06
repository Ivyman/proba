import apiEndpoint from "@src/utils/api";
import { API } from "@src/config/constants";
import { IContactFormData } from "@src/types/forms";

export const sendMessage = async (formData: IContactFormData) => {
    const params = { ...formData };

    return await apiEndpoint.post(API.URLS.MESSAGE, { params });
};
