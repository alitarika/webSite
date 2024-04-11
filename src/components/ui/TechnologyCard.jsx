export const TechnologyCard = ({ src, tech }) => {
  return (
    <div className="flex flex-row pr-3 mb-[6px]">
      <img
        src={src}
        alt={`${tech} logo`}
        title={`${tech}`}
        className="size-4 grayscale-[70%]"
      />
      <p className="pr-[2px] text-light/70 text-xs bottom-0 content-end">
        {tech}
      </p>
    </div>
  );
};
