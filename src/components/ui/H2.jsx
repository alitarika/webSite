import { cn } from "../../utils/cn";

export const H2 = ({ children, className }) => {
  return (
    <h2 className={cn("text-3xl text-center mb-12 relative", className)}>
      {children}
      <div className="absolute -bottom-[3px] left-1/2 -translate-x-6 w-28 -z-10 h-4 mr-[2px] bg-primary"></div>
      <div className="absolute bottom-[3px] left-1/2 -translate-x-12 w-28 -z-20 h-4 mr-[2px] bg-primary-300 blur-lg opacity-40"></div>

      <div className="absolute -bottom-[12px] left-1/2 translate-x-[76px] w-6 -z-10 h-4 mr-[2px] bg-light"></div>
      <div className="absolute -bottom-[12px] left-1/2 translate-x-[76px] w-6 -z-10 h-4 mr-[2px] bg-light blur-lg opacity-30"></div>
    </h2>
  );
};
