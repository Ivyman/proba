export type ContactFromFields = "email" | "name" | "subject" | "message";
export type LoginFromFields = "email" | "password";

export interface IContactFormData extends Record<ContactFromFields, string> {}
export interface ILoginFormData extends Record<LoginFromFields, string> {}
