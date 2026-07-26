export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  icon: Icon,
  className = "",
}) {
  const centered = align !== "left";

  return (
    <div
      className={`mb-10 flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          {Icon && <Icon aria-hidden="true" size={13} />}
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.12] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
