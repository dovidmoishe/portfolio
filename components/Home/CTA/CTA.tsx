"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useContactFormStore } from "@/features/contact/store";

const inputClassName =
  "w-full rounded-2xl border border-border bg-surface px-5 py-4 text-[15px] md:text-[16px] text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] placeholder:text-foreground/45 outline-none transition-[border-color,box-shadow] focus:border-foreground/35 focus:ring-2 focus:ring-ring/20";

const CTA = () => {
  const {
    canSubmit,
    status,
    statusMessage,
    submitForm,
    updateField,
    values,
  } = useContactFormStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitForm();
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-[60px] md:mt-[80px] lg:mt-[100px] py-[50px] md:py-[65px] lg:py-[80px]"
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="max-w-[720px]">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight"
          >
            Get in touch
          </motion.h2>

          <p className="mt-4 md:mt-5 text-[15px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[28px] text-foreground/70 max-w-[640px]">
            I&apos;m always interested in exploring new opportunities,
            collaborating, or exchanging ideas with like-minded individuals.
            Feel free to book a call or email me if you&apos;d like to see my
            portfolio deck or to discuss a potential project.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 md:mt-10 flex flex-col gap-4"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="contact-name">
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
                required
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={inputClassName}
              />

              <label className="sr-only" htmlFor="contact-email">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={inputClassName}
              />
            </div>

            <label className="sr-only" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your Message"
              required
              rows={6}
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${inputClassName} resize-y min-h-[160px]`}
            />

            <motion.button
              type="submit"
              disabled={!canSubmit}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="relative w-full overflow-hidden rounded-2xl bg-foreground px-5 py-4 text-[15px] md:text-[16px] font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.12' stroke-width='1.5'%3E%3Cpath d='M10 30 Q40 10 70 30 T110 30'/%3E%3Cpath d='M0 70 Q35 50 75 70 T120 70'/%3E%3Ccircle cx='25' cy='95' r='8'/%3E%3Ccircle cx='95' cy='20' r='6'/%3E%3Cpath d='M50 100 L65 85 L80 100'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-[14px] text-green-700 dark:text-green-400"
                  role="status"
                >
                  {statusMessage || "Thanks, your message was sent."}
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-[14px] text-red-600 dark:text-red-400"
                  role="alert"
                >
                  {statusMessage ||
                    "Something went wrong. Please try again or email me directly."}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
