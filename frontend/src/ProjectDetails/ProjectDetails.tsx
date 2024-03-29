import React, { useEffect, useState } from "react";
import FormattedDescription from "../Components/FormattedDescription";
import LanguageTag from "src/Components/LanguageTag";
import TopicTag from "src/Components/TopicTag";
import { useNavigate, useParams } from "react-router";
import {
  getProject,
  getProjectForRepo,
  getProjects,
} from "src/services/project-service";
import Project from "src/Types/Project";
import User from "src/Types/User";
import { getUser } from "src/services/user-service";
import HeartButton from "src/Components/Inputs/HeartButton";

export default function ProjectDetails() {
  const [users, setUsers] = useState<Array<User>>([]);
  const [projects, setProjects] = useState<Array<Project>>([]);
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      if (params["pid"]) {
        // single user, single project
        const p: Project = await getProject(params["pid"]);
        setProjects([p]);
        const u: User = await getUser(p.uid);
        setUsers([u]);
      } else if (params["owner"] && params["repo"]) {
        const fetchedProjects: Array<Project> = await getProjects(
          params["owner"],
          params["repo"]
        );

        // three cases:
        if (fetchedProjects.length === 0) {
          // no projects in database: generate details page
          const p = await getProjectForRepo(params["owner"], params["repo"]);
          setProjects([p]);
        } else if (fetchedProjects.length === 1) {
          // one project in database: forward to :pid page
          navigate("/projects/" + fetchedProjects[0]._id);
        } else if (fetchedProjects.length > 1) {
          // multiple projects in database: generate details, list all users
          const p = await getProjectForRepo(params["owner"], params["repo"]);
          setProjects([p]);
          const us = await Promise.all(
            fetchedProjects.map(async (project) => await getUser(project.uid))
          );
          setUsers(us);
        }
      }
    }
    fetchData();
  }, [params, navigate]);

  return (
    <div className="flex gap-4 md:flex-row flex-col justify-center md:items-start items-center ml-0 md:ml-4">
      <div className="md:w-5/12 gap-4 mx-4 w-11/12 flex flex-col justify-start text-primary max-w-none md:max-w-xl">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={index}
              className="bg-white border cursor-pointer border-border-neutral rounded-lg flex flex-wrap p-2"
              onClick={() => navigate("/profile/" + user._id)}
            >
              {user.profile_image_url && (
                <img
                  className="w-20 h-20 mr-4 rounded-full lh-profile-image object-cover"
                  src={user.profile_image_url}
                  alt="Rounded avatar"
                />
              )}
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">{user.name}</p>
                <a
                  href={`mailto:${user.email}`}
                  className="italic text-accent hover:underline"
                >
                  {user.email}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="bg-white border border-border p-4 rounded-lg italic text-secondary">
            No users have added this project yet.
          </p>
        )}
      </div>

      <div className="md:border-l-2 md:pl-4 md:w-5/12 w-11/12">
        {projects &&
          projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-4 md:items-start items-center"
              >
                <div className="w-11/12 bg-white border border-border-neutral rounded-lg p-2">
                  <p className="text-3xl font-semibold">{project.name}</p>
                  <FormattedDescription description={project.description} />
                </div>
                <div className="flex flex-col w-11/12">
                  <HeartButton
                    project={project}
                    setProject={(updatedProject) => {
                      let updatedProjects = [...projects];
                      updatedProjects[index] = updatedProject;
                      setProjects(updatedProjects);
                    }}
                  />
                  <div className="flex flex-wrap">
                    {project.languages &&
                      project.languages.map((x, i) => (
                        <LanguageTag
                          text={x}
                          canDelete={false}
                          onDelete={() => {}}
                          key={i}
                        />
                      ))}
                  </div>
                  <div className="flex flex-wrap">
                    {project.tags &&
                      project.tags.map((x, i) => (
                        <TopicTag
                          text={x}
                          canDelete={false}
                          onDelete={() => {}}
                          key={i}
                        />
                      ))}
                  </div>
                </div>
                {project.images &&
                  project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="project interface screenshot"
                      className="w-11/12 aspect-video rounded-lg object-scale-down bg-secondary"
                    ></img>
                  ))}
              </div>
            );
          })}
      </div>
    </div>
  );
}
