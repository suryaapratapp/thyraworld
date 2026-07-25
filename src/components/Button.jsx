import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-gradient-to-r from-yarn-coral to-yarn-ember text-white shadow-glow-coral hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "border border-white/12 bg-white/[0.05] text-bone-100 backdrop-blur hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09]",
  ghost:
    "border border-white/[0.08] bg-transparent text-bone-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-bone-50",
  glow:
    "border border-yarn-sage/40 bg-yarn-sage/10 text-yarn-sage shadow-glow-sage hover:-translate-y-0.5 hover:bg-yarn-sage/16",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${variantClasses[variant]} ${className}`;

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
