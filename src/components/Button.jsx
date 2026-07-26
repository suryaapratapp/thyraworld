import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-candy-gradient text-white shadow-pink hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "border border-ink-200 bg-white text-ink-900 shadow-soft hover:-translate-y-0.5 hover:border-candy-pink hover:text-candy-pink",
  ghost:
    "border border-ink-100 bg-white/70 text-ink-500 hover:border-ink-200 hover:bg-white hover:text-ink-900",
  mint:
    "bg-candy-mint text-white shadow-mint hover:-translate-y-0.5 hover:shadow-lift",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
