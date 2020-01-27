import * as yup from "yup";

export const contactValidationScheme = yup.object().shape({
    email: yup
        .string()
        .email("Nieprawidłowy adres e mail")
        .required("To pole jest wymagane"),
    subject: yup.string().required("To pole jest wymagane"),
    message: yup.string().required("To pole jest wymagane"),
});
