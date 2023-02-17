import ProjectCardText from "./project-card-text";

export default function SearchResult({ repoName, username, language }) {
  return (
    <div className="border border-gray-30 p-2 mb-4 mx-4 bg-white shadow-md rounded-lg">
      <ProjectCardText
        name={repoName}
        username={username}
        languageTags={language ? [language] : []}
        topicTags={[]}
        description={""}
        nameStyle={"text-sky-500"}
        usernameStyle={"text-gray-500"}
      />
    </div>
  );
}
