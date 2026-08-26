"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HugeiconsIcon from "@/components/HugeiconsIcon";
import {
  GithubIcon,
  InstagramIcon,
  NewTwitterIcon,
  TiktokIcon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "Twitter/X",
      icon: NewTwitterIcon,
      url: "https://x.com/yourusername",
    },
    {
      name: "Tiktok",
      icon: TiktokIcon,
      url: "https://tiktok.com/@itsdave.solana",
    },
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/dovidmoishe",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://instagram.com/itsdavetech_",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="py-8 md:py-10 lg:py-12 border-t border-border"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:gap-0 md:px-10">
        <p className="text-[13px] md:text-[14px] font-normal leading-[20px] md:leading-[21px] opacity-[0.7]">
          © {currentYear} All rights reserved.
        </p>

        <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
          {socials.map((social) => (
            <motion.div key={social.name} whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="text-foreground opacity-[0.7] hover:opacity-100 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
              aria-label={social.name}
            >
              <HugeiconsIcon icon={social.icon} size={18} className="md:w-[19px] md:h-[19px] lg:w-[20px] lg:h-[20px]" aria-hidden="true" />
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
