export const aboutMe = {
  name: "Md Arman",
  role: "Web Developer",
  about: {
    intro:
      "Hey! I'm a Frontend developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.",
    expertise:
      "I work with React, Next.js, and Tailwind CSS to create seamless user experiences. I love experimenting with Framer Motion for animations and leveraging ShadCN UI for clean, accessible design components.",
  },
  resume: "String",
  socialLinks: {
    email: "String",
    github: "https://github.com/itsarman001",
    linkedin: "https://www.linkedin.com/in/md-arman-15747b274/",
    twitter: "String",
  },
};

export const experiences = [
  {
    role: "Frontend Developer",
    type: "Kolkata - WB",
    company: { label: "Wiseboxs Technologies", link: "https://wiseboxs.com/" },
    duration: "Jan, 2025 - Present",
    responsibilities: [
      "Developed and maintained scalable web applications to enhance user engagement and operational efficiency.",
      "Participated in code reviews and contributed to the optimization of existing codebases.",
      "Collaborated with cross-functional teams to design and implement scalable solutions.",
      "Utilized modern frameworks and libraries to ensure responsive and dynamic user interfaces.",
    ],
    technologies: [
      "Typescript",
      "Vue.js",
      "Qusar",
      "Vuetify",
      "Docker",
      "Tailwind CSS",
      "SCSS & SASS",
      "MySql",
      "Supabase",
      "Firebase",
      "Git & Github",
    ],
  },
];

export const projects = [
  {
    name: "Quick Links",
    links: [
      {
        label: "Live Preview",
        link: "https://qwklink.vercel.app/",
      },
      {
        label: "Source Code",
        link: "https://github.com/itsarman001/Quick-Link",
      },
    ],
    description: [
      "URL Shortening: Convert long URLs into short, shareable links.",
      "Custom Aliases: Create personalized short URLs.",
      "Supabase Integration: Robust backend powered by Supabase for data management and authentication.",
      "Responsive Design: Optimized for both desktop and mobile devices.",
      "User-Friendly Interface: Intuitive UI for an enhanced user experience.",
    ],
    techStack: [
      "React",
      "Supabase",
      "Shadcn UI",
      "React Router DOM",
      "Yup",
      "Tailwind CSS",
      "Vite",
      "React Spinners",
      "React QR Code Logo",
    ],
  },
];

export const skillsData = [
  {
    category: "Languages",
    show: true,
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
  },
  {
    category: "Frameworks",
    show: true,
    skills: ["React.js", "Next.js", "Vue.js"],
  },
  {
    category: "Libraries",
    show: true,
    skills: ["Tailwind CSS", "ShadCN", "Quasar", "Vuetify", "Material UI"],
  },
  {
    category: "Database & Backend",
    show: false,
    skills: ["MongoDB", "Firebase", "Redis", "Contentful", "GraphQL"],
  },
  {
    category: "Cloud & Deployment",
    show: false,
    skills: [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Vercel",
    ],
  },
  {
    category: "Tools & Platforms",
    show: true,
    skills: ["Git", "GitHub", "Visual Studio Code"],
  },
];
