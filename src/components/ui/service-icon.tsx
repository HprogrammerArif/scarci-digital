import {
  Cloud,
  Cpu,
  Database,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  type LucideProps,
} from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/data/services";

const ICONS = {
  Rocket,
  Database,
  ShieldCheck,
  Smartphone,
  Cloud,
  Cpu,
  Store,
} satisfies Record<ServiceIconName, React.ComponentType<LucideProps>>;

export function ServiceIcon({
  name,
  ...props
}: { name: ServiceIconName } & LucideProps) {
  const Icon = ICONS[name] ?? Rocket;
  return <Icon aria-hidden="true" {...props} />;
}
