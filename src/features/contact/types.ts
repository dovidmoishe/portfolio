export type ContactFormStatus = "idle" | "sending" | "success" | "error";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  message: string;
}

export type ContactFormField = keyof ContactFormValues;
