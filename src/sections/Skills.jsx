import React from "react";
import { BaseHeading } from "../components";

const skillsData = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
  },
  {
    category: "Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Astro",
      "Express.js",
      "React Native",
      "Expo",
      "Electron",
    ],
  },
  {
    category: "Libraries",
    skills: [
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
      "ShadCN",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    category: "Database & Backend",
    skills: ["MongoDB", "Firebase", "Redis", "Contentful", "GraphQL"],
  },
  {
    category: "Cloud & Deployment",
    skills: [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Vercel",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Razorpay", "Postman", "Visual Studio Code"],
  },
];

export const Skills = ({ data }) => {
  return (
    <div id="skills" className="py-10">
      <BaseHeading>Technical Skills</BaseHeading>
      <ul className="mt-4 flex flex-col gap-2 text-base font-normal text-primary/90">
        {data.map((skill, index) => (
          <li key={index} className="grid sm:grid-cols-[170px_1fr] items-end">
            <p>{skill.category}:</p>
            <p className="text-sm text-muted-foreground">
              {skill.skills.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
