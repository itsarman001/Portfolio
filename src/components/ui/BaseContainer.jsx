import { BaseHeading } from "../index";

export const BaseContainer = ({ header, data }) => {
  return (
    <section className=" max-w-3xl mx-auto" aria-labelledby="experience-header">
      <BaseHeading label={header} id="experience-header" />

      {data.map((exp) => (
        <article
          key={exp.id}
          className="border-l-4 border-secondary pl-4 my-4"
          aria-labelledby={`experience-${exp.id}`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">{exp.position}</h3>
            <span className="bg-secondary text-sm px-2 py-1 rounded-md">
              {exp.location}
            </span>
          </div>

          <a
            href={exp.company.url}
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${exp.company.name} website`}
          >
            {exp.company.name}
          </a>

          <p className="text-flat text-sm mt-1">
            {exp.duration.start} - {exp.duration.end}
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
            {exp.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {exp.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-secondary text-flat text-xs px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
