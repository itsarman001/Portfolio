import React from "react";
import { BaseHeading } from "../components";

export const Skills = ({ data }) => {
  return (
    <div id="skills" className="py-10">
      <BaseHeading>Technical Skills</BaseHeading>
      <ul className="mt-4 flex flex-col gap-2 text-base font-normal text-primary/90">
        {data.map(
          (skill, index) =>
            skill.show && (
              <li
                key={index}
                className="grid sm:grid-cols-[170px_1fr] items-end"
              >
                <p>{skill.category}:</p>
                <p className="text-sm text-muted-foreground">
                  {skill.skills.join(", ")}
                </p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
