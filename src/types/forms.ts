export type ContactFromFields = "email" | "name" | "subject" | "message";

export interface IContactFormData extends Record<ContactFromFields, string> {}
