import { BaseHeading } from "../index";

export const MySkills = ({ data, className = "" }) => {
  return (
    <section className={`${className}`}>
      <div className="border-l-2 mt-4 space-y-4">
        {Object.entries(data).map(([category, skillList]) => (
          <article
            key={category}
            className="pl-4 flex items-start flex-col gap-1 md:flex-row w-full"
          >
            <h3 className="text-base font-bold text-wrap capitalize min-w-1/5 max-w-1/5">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillList.map((skill, index) => (
                <span key={skill}>
                  {skill}
                  {index !== skillList.length - 1 && ","}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
