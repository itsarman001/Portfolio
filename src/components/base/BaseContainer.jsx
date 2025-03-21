import { ArrowIcon } from "../../icons";
import { BaseChip } from "../index";

export const BaseContainer = ({ data, id, type }) => {
  return (
    <section aria-labelledby={id}>
      {data.map((item) => {
        const isExperience = type === "experience";
        const title = isExperience ? item.position : item.name;
        const linkUrl = isExperience ? item.company.url : item.url;
        const linkText = isExperience ? item.company.name : "Live Preview";
        const description = isExperience
          ? item.responsibilities
          : item.description;

        return (
          <article
            key={item.id}
            className="border-l-2 pl-4 mt-2 mb-8 w-full"
            aria-labelledby={`${type}-${item.id}`}
          >
            <header className="flex justify-between items-start flex-wrap">
              <div>
                <h3 className="text-xl font-bold">
                  {title} {isExperience && <BaseChip>{item.location}</BaseChip>}
                </h3>

                <p>
                  {type === "experience" ? "at " : ""}
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {linkText} <ArrowIcon className="w-5 h-5 inline-block" />
                  </a>
                </p>
              </div>
              {isExperience && (
                <time className="text-sm mt-1">
                  {item.duration.start} - {item.duration.end}
                </time>
              )}
            </header>

            <ul className="list-disc list-inside mt-4 space-y-2">
              {description.map((desc, index) => (
                <li key={index} className="list-none flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full inline-block bg-flat"></span>
                  <p className="text-sm">{desc}</p>
                </li>
              ))}
            </ul>

            <footer className="flex flex-wrap gap-2 mt-4 pl-5">
              {item.technologies.map((tech, index) => (
                <BaseChip key={index}>{tech}</BaseChip>
              ))}
            </footer>
          </article>
        );
      })}

      {type !== "projects" && (
        <div className="flex items-center justify-center w-full">
          <BaseChip>
            <a
              href="https://github.com/itsarman001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View More
            </a>
          </BaseChip>
        </div>
      )}
    </section>
  );
};
