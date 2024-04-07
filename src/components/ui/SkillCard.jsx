export const SkillCard = ({ skill }) => {
  return (
    <div className=" inline-block lg:w-[72px] lg:h-[102px] w-[66px] h-[96px] m-1 border-light/30 border rounded-lg">
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
