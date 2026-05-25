import type { IconType } from "react-icons";
import { FaEthereum, FaNodeJs, FaReact } from "react-icons/fa";
import { FaBolt, FaBrain, FaCoins, FaServer } from "react-icons/fa6";
import {
  SiExpress,
  SiGo,
  SiGooglegemini,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiRedis,
  SiSolana,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import { TbRoute } from "react-icons/tb";
import type { ProjectTechnology } from "@/features/projects/types";

const technologyIcons: Record<string, IconType> = {
  ai: SiOpenai,
  cost: FaCoins,
  crypto: FaEthereum,
  express: SiExpress,
  gemini: SiGooglegemini,
  go: SiGo,
  javascript: SiJavascript,
  jupiter: FaBolt,
  learning: FaBrain,
  mongodb: SiMongodb,
  nestjs: SiNestjs,
  nextjs: SiNextdotjs,
  nodejs: FaNodeJs,
  postgresql: SiPostgresql,
  redis: SiRedis,
  supabase: SiSupabase,
  tailwindcss: SiTailwindcss,
  react: FaReact,
  routing: TbRoute,
  solana: SiSolana,
  typescript: SiTypescript,
  web3: SiWeb3Dotjs,
};

interface TechnologyBadgeProps {
  technology: ProjectTechnology;
  compact?: boolean;
}

export default function TechnologyBadge({
  technology,
  compact = false,
}: TechnologyBadgeProps) {
  const Icon = technologyIcons[technology.icon] ?? FaServer;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.04] font-medium leading-none text-foreground/75 ${
        compact ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-base"
      }`}
    >
      <Icon
        className={compact ? "size-4 shrink-0" : "size-5 shrink-0"}
        aria-hidden="true"
      />
      {technology.name}
    </span>
  );
}
