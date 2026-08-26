import type { Metadata } from "next";
import Link from "next/link";
import HugeiconsIcon from "@/components/HugeiconsIcon";
import { ArrowLeft01Icon, Download04Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "CV",
  description: "View David Baiye's CV.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <main
      className="min-h-screen bg-white px-4 py-4 text-neutral-950 md:px-6 md:py-6"
      style={{ colorScheme: "light" }}
    >
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col md:min-h-[calc(100vh-3rem)]">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex min-h-10 items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-4 text-[14px] font-semibold leading-none text-neutral-950 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/20"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={13} aria-hidden="true" />
            Back
          </Link>

          <a
            href="/dave-cv.pdf"
            download
            className="inline-flex min-h-10 items-center gap-2 rounded-[10px] bg-neutral-950 px-4 text-[14px] font-semibold leading-none text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/20"
          >
            <HugeiconsIcon icon={Download04Icon} size={13} aria-hidden="true" />
            Download CV
          </a>
        </div>

        <div className="flex-1 overflow-hidden rounded-[8px] border border-neutral-200 bg-white">
          <iframe
            src="/dave-cv.pdf#toolbar=1&navpanes=0"
            title="David Baiye CV"
            className="h-[calc(100vh-6.5rem)] w-full bg-white md:h-[calc(100vh-8rem)]"
            style={{ colorScheme: "light" }}
          />
        </div>
      </div>
    </main>
  );
}
