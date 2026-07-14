import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-loft-dark text-white hover:bg-gray-800 shadow-sm",
  secondary: "bg-white text-loft-dark border border-gray-300 hover:bg-gray-50",
  ghost: "bg-transparent text-loft-dark hover:bg-gray-100",
};

const salesLinkStyles =
  "inline-flex items-center justify-center rounded-full bg-[#333333] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#444444]";

type SalesLinkProps = Omit<LinkProps, "to"> & {
  to?: LinkProps["to"];
};

export function SalesLink({
  className = "",
  children,
  to = "/contact",
  ...props
}: SalesLinkProps) {
  return (
    <Link to={to} className={`${salesLinkStyles} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function DarkButton({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${salesLinkStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link to="/" className={`inline-flex shrink-0 ${className}`}>
      <img
        src="/estamatch-logo.svg"
        alt="EstaMatch"
        className={`h-7 w-auto md:h-8 ${dark ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-loft-muted">
      {children}
    </p>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-loft-muted">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6L5 8.5L9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </li>
  );
}
