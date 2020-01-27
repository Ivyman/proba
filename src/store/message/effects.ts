import apiEndpoint, { URLS } from "@src/utils/api";
import { IContactFormData } from "@src/types/forms";

export const sendMessage = async (formData: IContactFormData) => {
    const params = { ...formData };

    return await apiEndpoint.post(URLS.message, { params });
};
