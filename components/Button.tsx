"use client";

import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  disabled,
  loading,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-8 py-2 text-sm font-medium rounded-md transition flex items-center justify-center gap-2";

  const variants = {
    primary:
      disabled || loading
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-gradient-to-r from-[#16A34A] via-[#64a719] to-[#16A34A] text-white hover:brightness-110 cursor-pointer",

    secondary:
      disabled || loading
        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
        : "bg-gray-100 text-black hover:bg-gray-200 cursor-pointer",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
