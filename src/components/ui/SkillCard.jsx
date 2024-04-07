export const SkillCard = ({ skill }) => {
  return (
    <div className="inline-block lg:w-[80px] lg:h-[112px] w-[66px] h-[96px] mx-1 border-light/30 border rounded-lg shadow-light/20 shadow-inner">
      <img
        src={skill.logo}
        alt={`${skill.name} logo`}
        className="w-full px-[6px] py-2"
      />

      <p className="text-center lg:text-sm text-xs mb-[6px] overflow-hidden">
        {skill.name}
      </p>
    </div>
  );
};
