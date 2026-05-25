"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const githubUsername = "dovidmoishe";

const GithubContributions = () => {
  return (
    <motion.div
      id="github-contributions"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-[60px] md:mt-[80px] lg:mt-[100px]"
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex flex-col">
            <p className="opacity-[0.7] text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[28px] md:leading-[32px] lg:leading-[36px]">
              GitHub
            </p>
            <p className="leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold text-[24px] md:text-[28px] lg:text-[30px]">
              Contributions
            </p>
          </div>

          <motion.div whileHover={{ x: 2 }}>
            <Link
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-[24px] md:leading-[28px] lg:leading-[30px] text-[14px] md:text-[14px] lg:text-[15px] font-normal text-foreground opacity-[0.7] underline underline-offset-4 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md md:max-w-[300px] lg:max-w-none"
            >
              View profile
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="mt-[28px] overflow-x-auto md:mt-[34px] lg:mt-[40px]"
        >
          <div className="min-w-[560px] max-w-[860px]">
            <Image
              src={`https://ghchart.rshah.org/000000/${githubUsername}`}
              alt={`${githubUsername} GitHub contribution chart`}
              width={860}
              height={144}
              className="h-auto w-full grayscale dark:invert"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GithubContributions;
