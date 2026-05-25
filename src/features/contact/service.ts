import { ContactFormResponse, ContactFormValues } from "./types";

const CONTACT_API_URL = "/api/contact";

async function parseContactResponse(response: Response) {
  const data = (await response.json().catch(() => null)) as
    | ContactFormResponse
    | null;

  if (!response.ok) {
    throw new Error(data?.message ?? "Message could not be sent right now.");
  }

  return {
    message: data?.message ?? "Message sent successfully.",
  };
}

export async function sendContactMessage(values: ContactFormValues) {
  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    }),
  });

  return parseContactResponse(response);
}
