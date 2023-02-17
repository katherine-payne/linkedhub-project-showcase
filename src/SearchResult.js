import ProjectCardText from "./project-card-text";

export default function SearchFeed({ repoName, username, language }) {
  return (
    <div className="border border-gray-30 p-2 mb-4 bg-white shadow-md rounded-lg">
      <ProjectCardText
        name={repoName}
        username={username}
        languageTags={[language]}
        topicTags={[]}
        description={""}
        nameStyle={"text-sky-500"}
        usernameStyle={"text-gray-500"}
      />
    </div>
  );
}
