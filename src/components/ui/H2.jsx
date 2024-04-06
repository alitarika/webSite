import { cn } from "../../utils/cn";

export const H2 = ({ children, className }) => {
  return (
    <h2 className={cn("text-3xl text-center mb-12 relative", className)}>
      {children}
      <div className="absolute -bottom-[3px] left-1/2 -translate-x-6 w-28 -z-10 h-4 mr-[2px] bg-primary"></div>
      <div className="absolute -bottom-[12px] left-1/2 translate-x-[76px] w-6 -z-10 h-4 mr-[2px] bg-light"></div>
    </h2>
  );
};
