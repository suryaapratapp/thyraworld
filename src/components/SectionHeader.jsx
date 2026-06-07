export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mb-10 flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blush-500 shadow-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-clay-700 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-clay-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
