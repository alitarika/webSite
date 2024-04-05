import { cn } from "../../utils/cn";

export const H2 = ({ children, className }) => {
  return (
    <h2 className={cn("text-3xl text-center mb-12", className)}>
      <div className="inline-block size-2 mr-[2px] bg-primary rounded-full"></div>
      <div className="inline-block size-3 mb-1 mr-[2px] bg-primary rounded-full"></div>
      {children}
      <div className="inline-block size-3 mb-1 ml-[2px] bg-primary rounded-full"></div>
      <div className="inline-block size-2 ml-[2px] bg-primary rounded-full"></div>
    </h2>
  );
};
