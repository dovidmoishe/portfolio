import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  FaArrowLeft,
  FaArrowRight,
  FaUpRightFromSquare,
} from "react-icons/fa6";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectsViewModel,
} from "@/features/projects/store";
import {
  absoluteUrl,
  getCanonicalPath,
  getProjectKeywords,
  profile,
  siteUrl,
} from "@/lib/seo";
import TechnologyBadge from "../../../../components/Home/Projects/TechnologyBadge";
import ThemeToggle from "../../../../components/Home/NavBar/ThemeToggle";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getProjectsViewModel().projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | David Baiye",
    };
  }

  return {
    title: `${project.name} Case Study`,
    description: `${project.description}. Built by David Baiye, a fullstack software engineer focused on AI, mobile, fintech, Solana, Web3, and scalable product systems.`,
    keywords: getProjectKeywords(project),
    alternates: {
      canonical: getCanonicalPath(`/projects/${project.slug}`),
    },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/projects/${project.slug}`),
      siteName: "David Baiye Portfolio",
      title: `${project.name} Case Study | David Baiye`,
      description: project.fullDescription,
      images: [
        {
          url: absoluteUrl(project.previewImage),
          width: 1200,
          height: 630,
          alt: `${project.name} project preview by David Baiye.`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Case Study | David Baiye`,
      description: project.description,
      images: [absoluteUrl(project.previewImage)],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previousProject, nextProject } = getAdjacentProjects(project.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: `${project.name} case study by ${profile.fullName}`,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.previewImage),
    description: project.fullDescription,
    dateCreated: project.year,
    creator: {
      "@type": "Person",
      name: profile.fullName,
      url: siteUrl,
      jobTitle: profile.role,
    },
    about: project.type,
    keywords: getProjectKeywords(project).join(", "),
    programmingLanguage: project.technologies.map(
      (technology) => technology.name
    ),
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto min-h-screen w-full max-w-6xl border-x border-border px-6 pb-20 pt-24 md:px-10 md:pb-24 md:pt-28 lg:px-14">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-3 rounded-full bg-foreground/[0.06] px-5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <FaArrowLeft size={14} aria-hidden="true" />
            Projects
          </Link>
          <ThemeToggle />
        </div>

        <header className="mt-10 max-w-5xl md:mt-12">
          <h1 className="text-5xl font-bold leading-tight tracking-normal text-foreground md:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-8 text-foreground/65 md:text-2xl md:leading-9">
            {project.description}
          </p>
        </header>

        <section className="mt-12 rounded-[28px] border border-border bg-surface/70 p-6 md:mt-14 md:p-10 lg:p-12">
          <div>
            <h2 className="text-xl font-bold leading-7 text-foreground md:text-2xl">
              Description
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-foreground/65 md:text-xl md:leading-9">
              {project.fullDescription}
            </p>
          </div>

          <div className="my-8 h-px w-full bg-border md:my-10" />

          <div>
            <h2 className="text-xl font-bold leading-7 text-foreground md:text-2xl">
              Technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <TechnologyBadge key={technology.name} technology={technology} />
              ))}
            </div>
          </div>

          <div className="my-8 h-px w-full bg-border md:my-10" />

          <dl className="grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="text-xl font-bold leading-7 text-foreground">Date</dt>
              <dd className="mt-4 text-lg leading-7 text-foreground/65">
                {project.year}
              </dd>
            </div>
            <div>
              <dt className="text-xl font-bold leading-7 text-foreground">Type</dt>
              <dd className="mt-4 text-lg leading-7 text-foreground/65">
                {project.type}
              </dd>
            </div>
            <div>
              <dt className="text-xl font-bold leading-7 text-foreground">Client</dt>
              <dd className="mt-4 text-lg leading-7 text-foreground/65">
                {project.client}
              </dd>
            </div>
          </dl>
        </section>

        <div className="mt-12 flex flex-col gap-5 md:mt-14 md:flex-row md:items-center md:justify-between">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 w-fit items-center gap-3 rounded-[20px] bg-foreground px-7 text-lg font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Visit Project
            <FaUpRightFromSquare size={18} aria-hidden="true" />
          </Link>

          <nav
            aria-label="Project navigation"
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={`/projects/${previousProject.slug}`}
              className="inline-flex min-h-14 items-center gap-4 rounded-[20px] bg-foreground/[0.06] px-7 text-lg font-medium text-foreground transition-colors duration-200 hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FaArrowLeft size={17} aria-hidden="true" />
              Previous
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex min-h-14 items-center gap-4 rounded-[20px] bg-foreground/[0.06] px-7 text-lg font-medium text-foreground transition-colors duration-200 hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Next
              <FaArrowRight size={17} aria-hidden="true" />
            </Link>
          </nav>
        </div>

        <section className="mt-14 overflow-hidden rounded-[28px] border border-border bg-surface/70 p-3 md:mt-16 md:p-4">
          <Image
            src={project.previewImage}
            alt={`${project.name} preview`}
            width={1920}
            height={1080}
            className={`aspect-[16/9] w-full rounded-[20px] ${
              project.previewFit === "contain"
                ? "bg-[#0d1117] object-contain"
                : "object-cover"
            }`}
            priority
          />
        </section>
      </div>
    </main>
  );
}
