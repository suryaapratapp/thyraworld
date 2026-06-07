import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-blush-400 text-white shadow-glow hover:-translate-y-0.5 hover:bg-blush-500 focus-visible:ring-blush-300",
  secondary:
    "border border-peach-100 bg-white text-clay-700 shadow-soft hover:-translate-y-0.5 hover:border-blush-200 hover:bg-peach-50 focus-visible:ring-peach-300",
  ghost:
    "border border-peach-200 bg-white text-clay-700 hover:bg-peach-100 focus-visible:ring-peach-300",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-4 ${variantClasses[variant]} ${className}`;

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
