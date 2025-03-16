import { ArrowIcon } from "../../icons";
import { BaseHeading, BaseChip } from "../index";

export const BaseContainer = ({ header, data, id }) => {
  return (
    <section aria-labelledby={id} id={id}>
      <BaseHeading label={header} dot />

      {data.map((exp) => (
        <article
          key={exp.id}
          className="border-l-2 pl-4 mt-2 mb-5 w-full"
          aria-labelledby={`experience-${exp.id}`}
        >
          <div className="flex justify-between items-start flex-wrap">
            <div>
              <div className="flex items-center gap-2.5 mb-0.5">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <BaseChip>{exp.location}</BaseChip>
              </div>

              <p>
                at,{" "}
                <span className="hover:underline">
                  <a
                    href={exp.company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${exp.company.name} website`}
                  >
                    {exp.company.name}
                    <ArrowIcon className="w-5 h-5 inline-block" />
                  </a>
                </span>
              </p>
            </div>
            <p className="text-sm mt-1">
              {exp.duration.start} - {exp.duration.end}
            </p>
          </div>

          <ul className="list-disc list-inside mt-4 space-y-2">
            {exp.responsibilities.map((task, index) => (
              <li key={index} className="list-none flex items-center gap-4">
                <span className="w-2 h-2 rounded-full inline-block bg-flat"></span>
                <p className="text-sm">{task}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4 pl-5">
            {exp.technologies.map((tech, index) => (
              <BaseChip key={index}>{tech}</BaseChip>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
