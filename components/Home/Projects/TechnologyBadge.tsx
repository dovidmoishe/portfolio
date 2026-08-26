import HugeiconsIcon from "@/components/HugeiconsIcon";
import type { IconSvgElement } from "@hugeicons/react";
import {
  AiBrain01Icon,
  BoltIcon,
  CodeXmlIcon,
  Coins01Icon,
  DatabaseIcon,
  EthereumIcon,
  GoogleGeminiIcon,
  JavaScriptIcon,
  NextIcon,
  NodeAddIcon,
  ReactIcon,
  Route01Icon,
  SourceCodeIcon,
  ServerIcon,
  TailwindcssIcon,
  Typescript01Icon,
  Brain01Icon,
  NetworkIcon,
} from "@hugeicons/core-free-icons";
import type { ProjectTechnology } from "@/features/projects/types";

const technologyIcons: Record<string, IconSvgElement> = {
  ai: AiBrain01Icon,
  cost: Coins01Icon,
  crypto: EthereumIcon,
  express: ServerIcon,
  gemini: GoogleGeminiIcon,
  go: CodeXmlIcon,
  javascript: JavaScriptIcon,
  jupiter: BoltIcon,
  learning: Brain01Icon,
  mongodb: DatabaseIcon,
  nestjs: ServerIcon,
  nextjs: NextIcon,
  nodejs: NodeAddIcon,
  postgresql: DatabaseIcon,
  redis: DatabaseIcon,
  supabase: DatabaseIcon,
  tailwindcss: TailwindcssIcon,
  react: ReactIcon,
  routing: Route01Icon,
  rust: SourceCodeIcon,
  solana: NetworkIcon,
  typescript: Typescript01Icon,
  web3: CodeXmlIcon,
};

interface TechnologyBadgeProps {
  technology: ProjectTechnology;
  compact?: boolean;
}

export default function TechnologyBadge({
  technology,
  compact = false,
}: TechnologyBadgeProps) {
  const icon = technologyIcons[technology.icon] ?? ServerIcon;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.04] font-medium leading-none text-foreground/75 ${
        compact ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-base"
      }`}
    >
      <HugeiconsIcon icon={icon} size={compact ? 16 : 20} className="shrink-0" aria-hidden="true" />
      {technology.name}
    </span>
  );
}
