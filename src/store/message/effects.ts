import apiEndpoint from "@utils/api";
import { API } from "@config/constants";
import { IContactFormData } from "@typing/forms";

export const sendMessage = async (formData: IContactFormData) => {
    const params = { ...formData };

    return await apiEndpoint.post(API.URLS.MESSAGE, { params });
};
