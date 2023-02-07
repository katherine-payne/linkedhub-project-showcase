import examplesFrank from "./examples";
import ProjectCard from "./project-card";
import ProjectCardSpotlight from "./project-card-spotlight";
import UserProfileHeading from "./user-profile-heading";
import UserProfileLabeledEntry from "./user-profile-labeled-entry";
import formatDescription from "./Utils";

export default function UserProfile() {
  const user = examplesFrank();

  return (
    <div className="flex md:flex-row flex-col justify-center">
      <div id="infoFeed" className="font-serif max-w-none md:max-w-lg border-r-2 ml-4 p-4">
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
              <UserProfileLabeledEntry
                label="Duration"
                entry={job.start + " - " + (job.end ?? "Present")}
              />
              <p className="whitespace-pre-wrap">
                {formatDescription(job.description)}
              </p>
            </div>
          );
        })}

        <UserProfileHeading title={"Education"} />
        {user.education.map((edu) => {
          return (
            <div className="mb-4">
              <p className="font-bold">{edu.university}</p>
              <UserProfileLabeledEntry label="Degree" entry={edu.degree} />
              <UserProfileLabeledEntry label="Major" entry={edu.major} />
              <UserProfileLabeledEntry
                label="Duration"
                entry={edu.start + " - " + edu.end}
              />
              <UserProfileLabeledEntry label="Grade" entry={edu.gpa} />
            </div>
          );
        })}

        <UserProfileHeading title={"Skills"} />
        <p className="mb-4">{user.skills.join(", ")}</p>
      </div>

      <div id="projectFeed" className="flex justify-center">
        <div className="md:max-w-lg max-w-none">
          {user.projects.map((p, i) => (
            <>
              <ProjectCardSpotlight
                name={p.name}
                hearts={p.hearts}
                languageTags={p.languages}
                topicTags={p.tags}
                description={p.description}
              />
              <ProjectCard
                name={p.name}
                hearts={p.hearts}
                languageTags={p.languages}
                topicTags={p.tags}
                description={p.description}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
