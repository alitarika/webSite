import { cn } from "../utils/cn";
export const Navbar = ({ children, className }) => {
  return (
    <header
      className={cn(
        "z-[100] backdrop-blur-[6px] backdrop-saturate-200 sticky top-0 border-b bg-dark/80 border-light/[0.2]",
        className
      )}
    >
      <nav className=" max-w-[1400px] w-full flex items-center text-light justify-between px-6 h-16 mx-auto">
        {children}
      </nav>
    </header>
  );
};
