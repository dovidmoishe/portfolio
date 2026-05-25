"use client";

import { useMemo, useState } from "react";

import { sendContactMessage } from "./service";
import {
  ContactFormField,
  ContactFormStatus,
  ContactFormValues,
} from "./types";

const EMPTY_CONTACT_FORM: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const contactRequestCache = new Map<string, ReturnType<typeof sendContactMessage>>();

function createContactCacheKey(values: ContactFormValues) {
  return JSON.stringify({
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    message: values.message.trim(),
  });
}

export function useContactFormStore() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_CONTACT_FORM);
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const canSubmit = useMemo(
    () =>
      Boolean(
        values.name.trim() && values.email.trim() && values.message.trim(),
      ) && status !== "sending",
    [status, values.email, values.message, values.name],
  );

  function updateField(field: ContactFormField, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (status !== "sending") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  function resetForm() {
    setValues(EMPTY_CONTACT_FORM);
  }

  async function submitForm() {
    const cacheKey = createContactCacheKey(values);

    setStatus("sending");
    setStatusMessage("");

    try {
      const pendingRequest =
        contactRequestCache.get(cacheKey) ?? sendContactMessage(values);

      contactRequestCache.set(cacheKey, pendingRequest);

      const response = await pendingRequest;
      resetForm();
      setStatus("success");
      setStatusMessage(response.message);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Message could not be sent right now.",
      );
    } finally {
      contactRequestCache.delete(cacheKey);
    }
  }

  return {
    canSubmit,
    resetForm,
    status,
    statusMessage,
    submitForm,
    updateField,
    values,
  };
}
