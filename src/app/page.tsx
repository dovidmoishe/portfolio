import Navbar from "@/../components/Home/NavBar/Navbar";
import Hero from "@/../components/Home/Hero/Hero";
import About from "@/../components/Home/About/About";
import Projects from "@/../components/Home/Projects/Projects";
import Work from "../../components/Home/Work/Work";
import CTA from "../../components/Home/CTA/CTA";
import Footer from "../../components/Home/Footer/Footer";
import { absoluteUrl, expertise, profile, siteUrl } from "@/lib/seo";
import { getProjectsViewModel } from "@/features/projects/store";

export default function Home() {
  const { projects } = getProjectsViewModel();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.fullName,
        alternateName: profile.displayName,
        jobTitle: profile.role,
        url: siteUrl,
        image: absoluteUrl(profile.image),
        email: profile.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        sameAs: profile.sameAs,
        knowsAbout: expertise,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#services`,
        name: `${profile.fullName} Software Engineering`,
        url: siteUrl,
        image: absoluteUrl(profile.image),
        areaServed: ["Nigeria", "United States", "United Kingdom", "Worldwide"],
        founder: {
          "@id": `${siteUrl}/#person`,
        },
        serviceType: [
          "Fullstack software development",
          "React Native mobile app development",
          "Next.js web development",
          "Solana and Web3 engineering",
          "AI product engineering",
          "Fintech product engineering",
          "Startup MVP development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "David Baiye Portfolio",
        url: siteUrl,
        description:
          "Portfolio and case studies for David Baiye, a fullstack software engineer focused on web, mobile, AI, fintech, and Solana products.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
      ...projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.name,
        url: absoluteUrl(`/projects/${project.slug}`),
        description: project.fullDescription,
        creator: {
          "@id": `${siteUrl}/#person`,
        },
        keywords: project.technologies
          .map((technology) => technology.name)
          .join(", "),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Work />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </>
  );
}
