type HeroSkillsProps = {
  skills: string[];
};

export function HeroSkills({ skills }: HeroSkillsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
