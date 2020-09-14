import * as yup from "yup";

export const loginValidationScheme = yup.object().shape({
    email: yup
        .string()
        .email("Nieprawidłowy adres email")
        .required("To pole jest wymagane"),
    password: yup.string().required("To pole jest wymagane"),
});
