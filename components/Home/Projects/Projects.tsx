"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/features/projects/types";
import { getProjectsViewModel } from "@/features/projects/store";
import HugeiconsIcon from "@/components/HugeiconsIcon";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

const selectedOrder = ["nectarfi", "jurix", "edulearn", "steadyxchange", "isitsafe"];

const ProjectLink = ({ project, light = false }: { project: Project; light?: boolean }) => (
  <Link
    href={project.link}
    target="_blank"
    rel="noreferrer"
    aria-label={`Open ${project.name}`}
    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 hover:rotate-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
      light
        ? "border-white/25 text-white hover:border-white/60 hover:bg-white/10"
        : "border-border text-foreground hover:border-foreground/50 hover:bg-foreground/[0.06]"
    }`}
  >
    <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} aria-hidden="true" />
  </Link>
);

const LogoTile = ({ project, large = false }: { project: Project; large?: boolean }) => {
  const initials = project.name.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase();
  const keepsLogoBackground = project.slug === "isitsafe";

  return (
    <div className={`flex items-center justify-center overflow-hidden ${keepsLogoBackground ? "rounded-[22px] bg-surface-muted" : "bg-transparent"} ${large ? "h-[96px] w-[96px]" : "h-[72px] w-[72px]"}`}>
      {project.logoSrc ? (
        <Image
          src={project.logoSrc}
          alt={`${project.name} logo`}
          width={large ? 96 : 72}
          height={large ? 96 : 72}
          style={project.logoScale ? { transform: `scale(${project.logoScale})` } : undefined}
          className={`h-full w-full object-contain p-2 ${keepsLogoBackground ? "" : "rounded-[14px]"} ${project.slug === "jurix" ? "mix-blend-multiply" : ""}`}
        />
      ) : (
        <span className={`font-mono font-bold tracking-[-0.12em] text-foreground ${large ? "text-[42px]" : "text-[28px]"}`}>
          {project.logoMark ?? initials}
        </span>
      )}
    </div>
  );
};

const FeaturedProjectCard = ({ project }: { project: Project }) => (
  <motion.article
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className="group flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-[22px] border border-border bg-[#e8d5a4] p-3 text-[#1d1b17] shadow-sm shadow-black/[0.06] sm:p-4"
  >
    <div className="flex items-center justify-between px-1 pb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#1d1b17]/60 sm:px-2">
      <span>Selected work</span>
      <span>01</span>
    </div>
    <div className="flex min-h-0 flex-1 items-start justify-start overflow-hidden rounded-[16px] bg-white/20 p-5 sm:p-6">
      <div className="transition-transform duration-700 group-hover:scale-[1.04]"><LogoTile project={project} large /></div>
    </div>
    <div className="flex min-h-[76px] items-end justify-between gap-6 px-1 pt-5 sm:px-2 sm:pt-6">
      <div>
        <h3 className="text-[30px] font-bold leading-none tracking-[-0.04em] sm:text-[42px]">{project.name}</h3>
        <p className="mt-3 max-w-[440px] text-[14px] leading-6 text-[#1d1b17]/65 sm:text-[15px]">{project.shortDescription ?? project.description}</p>
      </div>
      <ProjectLink project={project} />
    </div>
  </motion.article>
);

const SelectedProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
    className="group flex h-full min-h-0 flex-col overflow-hidden rounded-[22px] border border-border bg-surface p-3 shadow-sm shadow-black/[0.04] transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.06] sm:p-4"
  >
    <div className="flex min-h-0 flex-1 items-start justify-start"><div className="transition-transform duration-700 group-hover:scale-[1.04]"><LogoTile project={project} /></div></div>
    <div className="flex min-h-[64px] items-end justify-between gap-4 px-1 pt-4 sm:px-2 sm:pt-5">
      <div>
        <h3 className="text-[22px] font-bold leading-tight tracking-[-0.03em]">{project.name}</h3>
        <p className="mt-2 max-w-[280px] text-[13px] leading-5 text-foreground/60">{project.shortDescription ?? project.description}</p>
      </div>
      <ProjectLink project={project} />
    </div>
  </motion.article>
);

const ExperimentRow = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
    className="group flex items-center gap-4 border-t border-border py-5 first:border-t-0 sm:gap-6 sm:py-6"
  >
    <div className="min-w-0 flex-1">
      <h3 className="text-[17px] font-semibold leading-tight sm:text-[19px]">{project.name}</h3>
      <p className="mt-1 truncate text-[13px] text-foreground/55 sm:text-[14px]">{project.shortDescription ?? project.description}</p>
    </div>
    <Link href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground/55 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} aria-hidden="true" />
    </Link>
  </motion.div>
);

const Projects = () => {
  const { projects } = getProjectsViewModel();
  const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));
  const selectedProjects = selectedOrder.map((slug) => projectsBySlug.get(slug)).filter((project): project is Project => Boolean(project));
  const experimentProjects = projects.filter((project) => project.collection === "experiment");
  const [featuredProject, ...supportingProjects] = selectedProjects;

  return (
    <motion.div id="projects" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, ease: "easeOut" }} className="mt-[60px] md:mt-[80px] lg:mt-[100px]">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <p className="text-[18px] font-medium leading-[28px] opacity-70 md:text-[20px] lg:text-[24px]">Portfolio</p>
            <h2 className="font-serif text-[24px] font-bold leading-[32px] md:text-[28px] md:leading-[36px] lg:text-[30px] lg:leading-[40px]">Selected Work</h2>
          </div>
          <p className="max-w-[420px] text-[14px] font-normal leading-[24px] text-foreground opacity-70 md:text-[15px] md:leading-[30px]">A few products and experiences I&apos;ve helped bring to life across fintech, education, and crypto.</p>
        </div>

        {featuredProject && (
          <div className="mt-8 grid grid-cols-1 items-stretch gap-4 md:mt-10 md:gap-5 lg:grid-cols-12 lg:grid-rows-[220px_220px_250px]">
            <div className="lg:col-span-6 lg:row-span-2">
              <FeaturedProjectCard project={featuredProject} />
            </div>
            {supportingProjects.slice(0, 2).map((project, index) => (
              <div key={project.slug} className="lg:col-span-6">
                <SelectedProjectCard project={project} index={index} />
              </div>
            ))}
            {supportingProjects.slice(2).map((project, index) => (
              <div key={project.slug} className="lg:col-span-6">
                <SelectedProjectCard project={project} index={index + 2} />
              </div>
            ))}
          </div>
        )}

        {experimentProjects.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="flex flex-col gap-3 border-b border-border pb-5 md:flex-row md:items-end md:justify-between md:gap-6">
              <div>
                <p className="text-[18px] font-medium leading-[28px] opacity-70 md:text-[20px]">More builds</p>
                <h2 className="font-serif text-[24px] font-bold leading-[32px] md:text-[28px]">Small Experiments</h2>
              </div>
              <p className="max-w-[360px] text-[14px] leading-[24px] text-foreground/60">A few smaller tools, prototypes, and weekend projects I&apos;ve explored along the way.</p>
            </div>
            <div className="mt-1">{experimentProjects.map((project, index) => <ExperimentRow key={project.slug} project={project} index={index} />)}</div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
