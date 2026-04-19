import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ className, size = 48 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.jpg"
      alt="Lebanese Village Logo"
      width={size}
      height={size}
      className={cn("rounded-full object-cover shrink-0", className)}
      priority
    />
  );
}
