export type Experience = {
  role: string,
  company: string,
  location: string,
  start: string | null,
  end: string | null,
  description: string
}

export type Education =  {
  university: string,
  degree: string,
  major: string,
  gpa: number,
  start: string | null,
  end: string | null,
}

export type Project = {
  name: string,
  hearts: number,
  description: string,
  languages: Array<string>,
  tags: Array<string>,
}

export type User = {
  name: string,
  contact_info: {
    email: string,
    phone: string
  },
  experience: Array<Experience>,
  education: Array<Education>,
  skills: Array<string>,
  projects: Array<Project>
}

export const examplesFrank: User = {
  name: "Frank Anderson",
  contact_info: {
    email: "anderson.f@northeastern.edu",
    phone: "(408) 805-9922",
  },
  experience: [
    {
      role: "Teaching Assistant",
      company: "Northeastern University",
      location: "Boston, MA",
      start: "August 2022",
      end: null,
      description:
        "Managed a team of 4 Teaching Assistants to instruct weekly labs teach review sessions for a section of 36 students.\nHeld weekly Office Hours to help students with challenging concepts and homework questions.",
    },
    {
      role: "Specialist",
      company: "Apple",
      location: "Los Gatos, CA",
      start: "June 2021",
      end: "November 2021",
      description:
        "Communicated with customers to understand their needs, ignited their creative passions, and developed solutions unique to them.\nCollaborated with team members to close knowledge gaps and improve each other through specific and actionable feedback.",
    },
  ],
  education: [
    {
      university: "Northeastern University",
      degree: "Bachelor of Science",
      major: "Computer Science",
      gpa: 3.857,
      start: "2021",
      end: "2025",
    },
  ],
  skills: [
    "React",
    "Tailwind",
    "CSS",
    "Bootstrap",
    "Swift",
    "Firebase",
    "Scrum",
    "Git",
    "Python",
  ],
  projects: [
    {
      name: "Cool Project",
      hearts: 100,
      description:
        "This is my project!\nYou should check it out.\nIt's awesome!",
      languages: ["HTML", "CSS", "JavaScript", "Python"],
      tags: ["My Stuff", "Cool Projects", "Design", "Startup"],
    },
    {
      name: "My First Project",
      hearts: 100,
      description:
        "This is my project!\nYou should check it out.\nIt's awesome!",
      languages: ["HTML", "CSS", "JavaScript", "Python"],
      tags: ["My Stuff", "Cool Projects", "Design", "Startup"],
    },
  ],
};