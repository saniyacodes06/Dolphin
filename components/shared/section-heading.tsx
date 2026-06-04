import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--ocean-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold text-[var(--ocean-text)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-[var(--ocean-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
