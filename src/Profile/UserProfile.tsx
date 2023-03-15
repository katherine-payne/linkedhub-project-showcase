import React, { useState } from "react";
import { FaPencilAlt, FaPlus, FaTimes } from "react-icons/fa";
import {
  examplesFrank,
  Education,
  Experience,
} from "../Examples/example-profile";
import UserProfileHeading from "./UserProfileHeading";
import UserProfileLabeledEntry from "./UserProfileLabeledEntry";
import ProjectFeed from "../Components/ProjectFeed";
import FormattedDescription from "../Components/FormattedDescription";
import InputField from "src/Components/Inputs/InputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import EditEducation from "./EditEducation";
import EditExperience from "./EditExperience";

export default function UserProfile({
  user = examplesFrank,
  editProfile = false,
}) {
  const [editingPhone, setEditingPhone] = useState(false);
  const [newPhone, setNewPhone] = useState(user.contact_info.phone);
  const [addingEducation, setAddingEducation] = useState(false);
  const [editingEducation, setEditingEducation] = useState(
    user.education.map((edu) => {
      return { education: edu, editing: false };
    })
  );
  const [addingExperience, setAddingExperience] = useState(false);
  const [editingExperience, setEditingExperience] = useState(
    user.experience.map((job) => {
      return { experience: job, editing: false };
    })
  );
  const [editingSkills, setEditingSkills] = useState(false);
  const [newSkills, setNewSkills] = useState(user.skills);

  const isEditingExperience = (job: Experience) => {
    return editingExperience.find((exp) => exp.experience === job)?.editing;
  };
  const updateEditingExperience = (job: Experience, editing: boolean) => {
    setEditingExperience(
      editingExperience.map((exp) => {
        return exp.experience === job
          ? { experience: job, editing: editing }
          : exp;
      })
    );
  };

  const isEditingEducation = (edu: Education) => {
    return editingEducation.find((ed) => ed.education === edu)?.editing;
  };
  const updateEditingEducation = (edu: Education, editing: boolean) => {
    setEditingEducation(
      editingEducation.map((ed) => {
        return ed.education === edu ? { education: edu, editing: editing } : ed;
      })
    );
  };

  return (
    <div className="flex md:flex-row flex-col justify-center">
      <div
        id="infoFeed"
        className="font-serif text-primary max-w-none md:max-w-xl border-r-2 ml-4 p-4"
      >
        <p className="text-3xl font-semibold">{user.name}</p>
        <p>
          <a href={"mailto:" + user.contact_info.email}>
            {user.contact_info.email}
          </a>
        </p>
        <p className="flex items-center gap-1">
          {(!editProfile || (editProfile && !editingPhone)) && (
            <a href={"tel:" + user.contact_info.phone}>
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
                onClick={() => {
                  /* Save to database */
                  setEditingPhone(false);
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
        {user.experience.map((job) => {
          return (
            <div className="mb-4">
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
                      onClick={() => {
                        /* Send deletion to database */
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
                    entry={job.start + " - " + (job.end ?? "Present")}
                  />
                  <p className="whitespace-pre-wrap">
                    <FormattedDescription description={job.description} />
                  </p>
                </>
              )}
              {editProfile && isEditingExperience(job) && (
                <EditExperience
                  experience={job}
                  onSave={(ex) => {
                    /* Save to database */
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
            onSave={() => {
              /* Save to database */
              setAddingExperience(false);
            }}
            onCancel={() => {
              setAddingExperience(false);
            }}
          />
        )}

        <UserProfileHeading title="Education" />
        {user.education.map((edu) => {
          return (
            <div className="mb-4">
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
                      onClick={() => {
                        /* Send deletion to database */
                      }}
                    />
                  </div>
                )}
              </div>

              {(!editProfile || !isEditingEducation(edu)) && (
                <>
                  <UserProfileLabeledEntry label="Degree" entry={edu.degree} />
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
                  onSave={(ex) => {
                    /* Save to database */
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
            onSave={() => {
              /* Save to database */
              setAddingEducation(false);
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
                value={newSkills.join(", ")}
                onChange={(e) => {
                  setNewSkills(e.target.value.split(", "));
                }}
              />
              <PrimaryButton
                text="Save"
                onClick={() => {
                  /* Save to database */
                  setEditingSkills(false);
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

      <ProjectFeed projects={examplesFrank.projects} />
    </div>
  );
}
