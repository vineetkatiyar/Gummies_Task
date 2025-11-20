"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="
        px-8 py-2
        text-sm font-medium text-white
        rounded-md
        cursor-pointer
        transition
        bg-gradient-to-r
        from-[#16A34A] 
        via-[#64a719] 
        to-[#16A34A]
        hover:brightness-110
      "
      {...props}
    >
      {children}
    </button>
  );
}
