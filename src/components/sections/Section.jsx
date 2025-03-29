import { ArrowUpRight } from "lucide-react";

import { BaseHeading } from "@/components";

export const Section = ({ data, header, id, github, type }) => {
  return (
    <section id={id} className="py-10">
      <BaseHeading>{header}</BaseHeading>
      <ul
        className={`mt-4 ${
          type === "projects" && data.length > 3
            ? "grid md:grid-cols-2"
            : "flex flex-col"
        } gap-12 text-base font-normal text-primary/90`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 hover:border-primary"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg text-primary/90">
                  {type === "projects" ? item.name : item.role}

                  {type === "experiences" && (
                    <span className="ml-2 rounded bg-secondary px-2 py-1 text-xs inline-block max-sm:mb-2">
                      {item.type}
                    </span>
                  )}
                </p>

                {type === "experiences" && (
                  <p className="flex items-center text-sm">
                    at,
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 flex items-center gap-1"
                      href={item.company.links}
                    >
                      {item.company.label} <ArrowUpRight size={18} />
                    </a>
                  </p>
                )}

                {type === "projects" && (
                  <p className="flex items-center gap-1 text-sm">
                    {item.links.map((link, i) => (
                      <a
                        key={i}
                        className="flex items-center gap-1 ml-2"
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} <ArrowUpRight size={18} />
                      </a>
                    ))}
                  </p>
                )}
              </div>

              {type === "experiences" && (
                <p className="text-sm text-muted-foreground">{item.duration}</p>
              )}
            </div>

            <ul className="mt-4 list-disc space-y-1 pl-3 text-sm text-muted-foreground text-justify">
              {item.description?.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
              {item.responsibilities?.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

            <ul className="mt-2 flex flex-wrap items-center gap-2 pl-3">
              {item.techStack?.map((tech, i) => (
                <li key={i} className="rounded bg-muted px-2 py-1 text-xs">
                  {tech}
                </li>
              ))}
              {item.technologies?.map((tech, i) => (
                <li key={i} className="rounded bg-muted px-2 py-1 text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {type === "projects" && (
        <div className="mt-8 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-sm text-muted-foreground"
            href={github}
          >
            View all projects
          </a>
        </div>
      )}
    </section>
  );
};
