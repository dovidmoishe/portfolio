"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useThemeStore } from "@/features/theme/store";
import { getWorkViewModel } from "@/features/work/store";
import HugeiconsIcon from "@/components/HugeiconsIcon";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

const Work = () => {
  const { works } = getWorkViewModel();
  const { isDark } = useThemeStore();

  return (
    <motion.div
      id="work"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-[60px] md:mt-[80px] lg:mt-[100px]"
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-col gap-1">
          <p className="opacity-[0.7] text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-tight">
            Professional Journey
          </p>
          <p className="font-serif font-bold text-[28px] md:text-[34px] lg:text-[40px] leading-tight">
            Work Experience
          </p>
        </div>

        <ul className="mt-6 md:mt-8 divide-y divide-border">
          {works.map((work) => (
            <motion.li
              key={work.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ x: 2 }}
              className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <Link
                  href={work.link}
                  target={work.link.startsWith("#") ? undefined : "_blank"}
                  rel={
                    work.link.startsWith("#") ? undefined : "noopener noreferrer"
                  }
                  aria-label={`Visit ${work.company}`}
                  className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-[12px] p-2 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:size-12"
                >
                  <Image
                    src={isDark && work.logoSrcDark ? work.logoSrcDark : work.logoSrc}
                    alt={`${work.company} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain rounded-[10px]"
                  />
                </Link>

                <div className="min-w-0 flex-1">
                  <p className="text-[17px] md:text-[19px] font-semibold leading-snug">
                    {work.role}
                    <span className="font-normal text-foreground/55">
                      {" "}
                      -{" "}
                      <Link
                        href={work.link}
                        target={work.link.startsWith("#") ? undefined : "_blank"}
                        rel={
                          work.link.startsWith("#")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {work.company}
                        {!work.link.startsWith("#") && (
                          <HugeiconsIcon icon={ArrowUpRight01Icon} size={11} className="shrink-0 opacity-55" aria-hidden="true" />
                        )}
                      </Link>
                    </span>
                  </p>
                  <p className="mt-1 text-[13px] md:text-[14px] leading-snug text-foreground/65">
                    {work.summary}
                  </p>
                </div>
              </div>
              <p className="shrink-0 text-[13px] md:text-[14px] font-medium text-foreground/55 sm:pt-0.5 sm:text-right">
                {work.duration}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Work;
