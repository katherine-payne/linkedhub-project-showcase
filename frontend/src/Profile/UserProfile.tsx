import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaPencilAlt, FaPlus, FaTimes } from "react-icons/fa";
import Education from "src/Types/Education";
import Experience from "src/Types/Experience";
import UserProfileHeading from "./UserProfileHeading";
import UserProfileLabeledEntry from "./UserProfileLabeledEntry";
import ProjectFeed from "../Components/ProjectFeed";
import FormattedDescription from "../Components/FormattedDescription";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import EditEducation from "./EditEducation";
import EditExperience from "./EditExperience";
import { getUser, updateUser } from "src/services/user-service";
import User from "src/Types/User";
import { RootState } from "src/redux/store";

export default function UserProfile({ editProfile = false }) {
  const { uid } = useParams();
  const { currentUser } = useSelector((state: RootState) => state.users);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchData() {
      const r = uid ? await getUser(uid) : currentUser; // TODO: Replace with logged in user id after login is implemented
      setUser(r);

      setNewPhone(r.contact_info.phone);
      setEditingEducation(
        r.education.map((edu: Education) => {
          return { education: edu, editing: false };
        })
      );
      setEditingExperience(
        r.experience.map((job: Experience) => {
          return { experience: job, editing: false };
        })
      );
      setNewSkills(r.skills);
    }
    fetchData();
  }, [uid]);

  const [editingPhone, setEditingPhone] = useState(false);
  const [newPhone, setNewPhone] = useState(
    user?.contact_info.phone ?? undefined
  );
  const [addingEducation, setAddingEducation] = useState(false);
  const [editingEducation, setEditingEducation] = useState(
    user?.education.map((edu) => {
      return { education: edu, editing: false };
    }) ?? undefined
  );
  const [addingExperience, setAddingExperience] = useState(false);
  const [editingExperience, setEditingExperience] = useState(
    user?.experience.map((job) => {
      return { experience: job, editing: false };
    }) ?? undefined
  );
  const [editingSkills, setEditingSkills] = useState(false);
  const [newSkills, setNewSkills] = useState(user?.skills ?? undefined);

  const isEditingExperience = (job: Experience) => {
    return editingExperience?.find((exp) => exp.experience === job)?.editing;
  };
  const updateEditingExperience = (job: Experience, editing: boolean) => {
    const currentExp = editingExperience?.find((ex) => ex.experience === job);
    currentExp
      ? setEditingExperience(
          editingExperience?.map((exp) => {
            return exp.experience === job
              ? { experience: job, editing: editing }
              : exp;
          })
        )
      : setEditingExperience([
          ...(editingExperience ?? []),
          { experience: job, editing: editing },
        ]);
  };

  const isEditingEducation = (edu: Education) => {
    return editingEducation?.find((ed) => ed.education === edu)?.editing;
  };
  const updateEditingEducation = (edu: Education, editing: boolean) => {
    const currentEdu = editingEducation?.find((ex) => ex.education === edu);
    currentEdu
      ? setEditingEducation(
          editingEducation?.map((ed) => {
            return ed.education === edu
              ? { education: edu, editing: editing }
              : ed;
          })
        )
      : setEditingEducation([
          ...(editingEducation ?? []),
          { education: edu, editing: editing },
        ]);
  };

  return (
    <div className="flex md:flex-row flex-col justify-center mb-8">
      {user && (
        <div
          id="infoFeed"
          className="font-serif text-primary max-w-none md:max-w-xl border-r-2 ml-4 p-4"
        >
          <p className="text-3xl font-semibold">{user.name}</p>
          <p>
            <a
              className={"italic text-accent hover:underline"}
              href={"mailto:" + user.contact_info.email}
            >
              {user.contact_info.email}
            </a>
          </p>
          <p className="flex items-center gap-1">
            {(!editProfile || (editProfile && !editingPhone)) && (
              <a
                href={"tel:" + user.contact_info.phone}
                className="italic text-accent hover:underline"
              >
                {user.contact_info.phone}
              </a>
            )}
            {editProfile && !editingPhone && (
              <PrimaryButton
                icon={<FaPencilAlt />}
                onClick={() => {
                  setEditingPhone(true);
                }}
              />
            )}
            {editProfile && editingPhone && (
              <>
                <InputField
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                />
                <PrimaryButton
                  text="Save"
                  onClick={async () => {
                    const updatedUser = {
                      ...user,
                      contact_info: {
                        ...user.contact_info,
                        phone: newPhone ?? "",
                      },
                    };
                    const newUser = await updateUser(updatedUser);
                    setEditingPhone(false);
                    setUser(newUser);
                  }}
                />
                <PrimaryButton
                  text="Cancel"
                  onClick={() => {
                    setNewPhone(user.contact_info.phone);
                    setEditingPhone(false);
                  }}
                />
              </>
            )}
          </p>

          <UserProfileHeading title="Experience" />
          {user.experience.map((job, index) => {
            return (
              <div className="mb-4" key={index}>
                <div className="flex items-center justify-between">
                  <p className="font-bold">{job.role}</p>
                  {editProfile && !isEditingExperience(job) && (
                    <div className="flex gap-1">
                      <PrimaryButton
                        icon={<FaPencilAlt />}
                        onClick={() => {
                          updateEditingExperience(job, true);
                        }}
                      />
                      <PrimaryButton
                        icon={<FaTimes />}
                        onClick={async () => {
                          const updatedUser = user;
                          updatedUser.experience =
                            updatedUser.experience.filter((ex) => ex !== job);
                          const newUser = await updateUser(updatedUser);
                          updateEditingExperience(job, false);
                          setUser(newUser);
                        }}
                      />
                    </div>
                  )}
                </div>

                {(!editProfile || !isEditingExperience(job)) && (
                  <>
                    <UserProfileLabeledEntry
                      label="Company"
                      entry={job.company}
                    />
                    <UserProfileLabeledEntry
                      label="Location"
                      entry={job.location}
                    />
                    <UserProfileLabeledEntry
                      label="Duration"
                      entry={
                        job.start + " - " + (job.end ? job.end : "Present")
                      }
                    />
                    <div className="whitespace-pre-wrap">
                      <FormattedDescription description={job.description} />
                    </div>
                  </>
                )}
                {editProfile && isEditingExperience(job) && (
                  <EditExperience
                    experience={job}
                    onSave={async (ex) => {
                      const updatedUser = user;
                      updatedUser.experience = updatedUser.experience.map((e) =>
                        e === job ? ex : e
                      );
                      const newUser = await updateUser(updatedUser);
                      updateEditingExperience(job, false);
                      setUser(newUser);
                    }}
                    onCancel={() => {
                      updateEditingExperience(job, false);
                    }}
                  />
                )}
              </div>
            );
          })}
          {editProfile && !addingExperience && (
            <PrimaryButton
              icon={<FaPlus />}
              onClick={() => {
                setAddingExperience(true);
              }}
            />
          )}
          {editProfile && addingExperience && (
            <EditExperience
              onSave={async (ex) => {
                const updatedUser = { ...user };
                updatedUser.experience.push(ex);
                const newUser = await updateUser(updatedUser);
                setAddingExperience(false);
                setUser(newUser);
              }}
              onCancel={() => {
                setAddingExperience(false);
              }}
            />
          )}

          <UserProfileHeading title="Education" />
          {user.education.map((edu, index) => {
            return (
              <div className="mb-4" key={index}>
                <div className="flex items-center justify-between">
                  <p className="font-bold">{edu.university}</p>
                  {editProfile && !isEditingEducation(edu) && (
                    <div className="flex gap-1">
                      <PrimaryButton
                        icon={<FaPencilAlt />}
                        onClick={() => {
                          updateEditingEducation(edu, true);
                        }}
                      />
                      <PrimaryButton
                        icon={<FaTimes />}
                        onClick={async () => {
                          const updatedUser = user;
                          updatedUser.education = updatedUser.education.filter(
                            (ex) => ex !== edu
                          );
                          const newUser = await updateUser(updatedUser);
                          updateEditingEducation(edu, false);
                          setUser(newUser);
                        }}
                      />
                    </div>
                  )}
                </div>

                {(!editProfile || !isEditingEducation(edu)) && (
                  <>
                    <UserProfileLabeledEntry
                      label="Degree"
                      entry={edu.degree}
                    />
                    <UserProfileLabeledEntry label="Major" entry={edu.major} />
                    <UserProfileLabeledEntry
                      label="Duration"
                      entry={edu.start + " - " + edu.end}
                    />
                    <UserProfileLabeledEntry label="Grade" entry={edu.gpa} />
                  </>
                )}
                {editProfile && isEditingEducation(edu) && (
                  <EditEducation
                    education={edu}
                    onSave={async (ed) => {
                      const updatedUser = user;
                      updatedUser.education = updatedUser.education.map((e) =>
                        e === edu ? ed : e
                      );
                      const newUser = await updateUser(updatedUser);
                      updateEditingEducation(edu, false);
                      setUser(newUser);
                    }}
                    onCancel={() => {
                      updateEditingEducation(edu, false);
                    }}
                  />
                )}
              </div>
            );
          })}
          {editProfile && !addingEducation && (
            <PrimaryButton
              icon={<FaPlus />}
              onClick={() => {
                setAddingEducation(true);
              }}
            />
          )}
          {editProfile && addingEducation && (
            <EditEducation
              onSave={async (ed) => {
                const updatedUser = { ...user };
                updatedUser.education.push(ed);
                const newUser = await updateUser(updatedUser);
                setAddingEducation(false);
                setUser(newUser);
              }}
              onCancel={() => {
                setAddingEducation(false);
              }}
            />
          )}

          <UserProfileHeading title="Skills" />
          <div className="flex items-center gap-1">
            {(!editProfile || (editProfile && !editingSkills)) && (
              <p>{user.skills.join(", ")}</p>
            )}
            {editProfile && !editingSkills && (
              <PrimaryButton
                icon={<FaPencilAlt />}
                onClick={() => {
                  setEditingSkills(true);
                }}
              />
            )}
            {editProfile && editingSkills && (
              <>
                <textarea
                  className="text-primary text-sm border border-border rounded-lg w-full p-3"
                  id="skills"
                  placeholder="Skills"
                  value={(newSkills ?? []).join(", ")}
                  onChange={(e) => {
                    setNewSkills(e.target.value.split(", "));
                  }}
                />
                <PrimaryButton
                  text="Save"
                  onClick={async () => {
                    const updatedUser = { ...user, skills: newSkills ?? [] };
                    const newUser = await updateUser(updatedUser);
                    setEditingSkills(false);
                    setUser(newUser);
                  }}
                />
                <PrimaryButton
                  text="Cancel"
                  onClick={() => {
                    setNewSkills(user.skills);
                    setEditingSkills(false);
                  }}
                />
              </>
            )}
          </div>
        </div>
      )}

      {user && <ProjectFeed projects={user.projects} />}
    </div>
  );
}
