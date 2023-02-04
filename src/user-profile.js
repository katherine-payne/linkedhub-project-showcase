import UserProfileHeading from "./user-profile-heading";
import UserProfileLabeledEntry from "./user-profile-labeled-entry";

export default function UserProfile() {
  const user = {
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
        gpa: "3.857",
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
  };

  function formatDescription (description) {
    if (description.includes("\n")) {
      return (
        <ul className="list-disc ml-6">
          {
          description.split("\n").map( (bullet) => {
            return (<li>{bullet}</li>);
          })
          }
        </ul>
      );
    } else {
      return description;
    }
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div
        id="infoFeed"
        className="font-serif  col-span-1 border-r-slate-300 border-r-2 ml-4 p-4"
      >
        <p className="text-3xl font-semibold">{user.name}</p>
        <p>
          <a href={"mailto:" + user.contact_info.email}>
            {user.contact_info.email}
          </a>
        </p>
        <p>
          <a href={"tel:" + user.contact_info.phone}>
            {user.contact_info.phone}
          </a>
        </p>

        <UserProfileHeading title="Experience" />
        {user.experience.map((job) => {
          return (
            <div className="mb-4">

              <p className="font-bold">{job.role}</p>

              <UserProfileLabeledEntry label="Company" entry={job.company} />
              <UserProfileLabeledEntry label="Location" entry={job.location} />
              <UserProfileLabeledEntry label="Duration" entry={job.start + " - " + (job.end ?? "Present")} />
              <p className="whitespace-pre-wrap">{formatDescription(job.description)}</p>
            </div>
          );
        })}

        <UserProfileHeading title={"Education"} />
        {user.education.map((edu) => {
          return (<div className="mb-4">
            <p className="font-bold">{edu.university}</p>
            <UserProfileLabeledEntry label="Degree" entry={edu.degree} />
            <UserProfileLabeledEntry label="Major" entry={edu.major} />
            <UserProfileLabeledEntry label="Duration" entry={edu.start + " - " + edu.end} />
            <UserProfileLabeledEntry label="Grade" entry={edu.gpa} />
          </div>);
        })}

        <UserProfileHeading title={"Skills"} />
        <p className="mb-4">{user.skills.join(", ")}</p>
      </div>

      <div id="projectFeed" className="col-span-1">
        {[...Array(10)].map((x, i) => (
          <p>Project</p>
        ))}
      </div>
    </div>
  );
}
