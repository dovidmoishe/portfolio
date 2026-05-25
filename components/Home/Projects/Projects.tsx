"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { Project } from "@/features/projects/types";
import { getProjectsViewModel } from "@/features/projects/store";

const ProjectCard = (projectData: Project) => {
  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col rounded-[18px] border border-border bg-surface p-3 pb-4 shadow-sm shadow-black/[0.04] transition-shadow duration-300 hover:shadow-md dark:shadow-black/20 sm:p-4 sm:pb-5 lg:p-4"
    >
      <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-[14px] bg-surface-muted lg:rounded-[16px]">
        <Image
          src={projectData.previewImage}
          alt={projectData.name}
          width={1920}
          height={1080}
          className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
            projectData.previewFit === "contain"
              ? "object-contain p-2"
              : "object-cover"
          }`}
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-[19px] font-bold leading-[25px] tracking-normal text-foreground md:text-[22px] md:leading-[28px]">
            {projectData.name}
          </h3>
          <p className="shrink-0 pt-1 text-[12px] font-medium leading-[18px] text-foreground/55 md:text-[13px]">
            {projectData.year}
          </p>
        </div>

        <p className="mb-4 min-h-[60px] overflow-hidden text-[13px] font-normal leading-[20px] text-foreground/65 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] md:text-[15px] md:leading-[22px]">
          {projectData.description}
        </p>

        <Link
          href={`/projects/${projectData.slug}`}
          className="mt-auto inline-flex min-h-10 w-fit items-center gap-2 rounded-[12px] bg-foreground/[0.06] px-4 text-[14px] font-semibold leading-none text-foreground transition-colors duration-300 hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-h-11 md:px-5 md:text-[15px]"
        >
          View Project
          <FaArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { projects } = getProjectsViewModel();

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-[60px] md:mt-[80px] lg:mt-[100px]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex flex-col">
            <p className="opacity-[0.7] text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[28px] md:leading-[32px] lg:leading-[36px]">
              Portfolio
            </p>
            <p className="leading-[32px] md:leading-[36px] lg:leading-[40px] font-bold text-[24px] md:text-[28px] lg:text-[30px]">Selected Works</p>
          </div>

          <p className="leading-[24px] md:leading-[28px] lg:leading-[30px] text-[14px] md:text-[14px] lg:text-[15px] font-normal text-foreground opacity-[0.7] md:max-w-[300px] lg:max-w-none">
            A curated selection of projects I&apos;ve worked on across design,
            development, and product.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-7 gap-y-10 mt-[40px] md:mt-[50px] lg:mt-[60px] lg:grid-cols-2 lg:gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;
