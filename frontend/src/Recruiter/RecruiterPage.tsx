import React, { useEffect, useState } from "react";
import CompanyDetailsCard from "src/Components/CompanyDetailsCard";
import { useNavigate, useParams } from "react-router";
import { FaCheckCircle, FaPencilAlt } from "react-icons/fa";
import Company from "src/Types/Company";
import { getCompanyForRID } from "src/services/company-service";
import User from "src/Types/User";
import { getUser } from "src/services/user-service";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { updateUser } from "src/services/user-service";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import UserProfileHeading from "../Profile/UserProfileHeading";

export default function RecruiterPage({ editProfile = false }) {
  const { rid } = useParams();
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [recruiter, setRecruiter] = useState<User | null>(null);
  const [companies, setCompanies] = useState<Array<Company>>([]);
  const [editingSummary, setEditingSummary] = useState(false);
  const [newSummary, setNewSummary] = useState("");
  const [emailShown, setEmailShown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const r: User = rid !== undefined ? await getUser(rid) : currentUser;
      const c: Array<Company> = await getCompanyForRID(rid ?? r._id);
      setRecruiter(r);
      setCompanies(c);
      setNewSummary(r.summary ?? "");
      setEmailShown(r.email_shown ?? false);
    }
    fetchData();
  }, [rid, currentUser]);

  const labelClass = (value: boolean) =>
    `p-2 rounded-lg flex flex-row justify-center w-full gap-1 ${
      emailShown === value ? "bg-sky-100 outline outline-sky-300" : ""
    }`;

  return (
    <div className="flex flex-col gap-12 items-center">
      {recruiter && (
        <div className="flex flex-col gap-4 max-w-xl font-serif">
          <div className="flex flex-row items-center gap-4">
            <img
              className="w-16 h-16 rounded-full object-cover shadow-md aspect-square"
              alt="Rounded avatar"
              src={recruiter.profile_image_url}
            />
            <div className="flex flex-col">
              <p className="text-2xl text-primary font-semibold">
                {recruiter.name}
              </p>
              <div className="flex">
                {(recruiter.email_shown || editProfile) && (
                  <a
                    href={"mailto:" + recruiter.email}
                    className={`text-secondary hover:text-accent hover:underline ${
                      editProfile ? "mt-1" : ""
                    }`}
                  >
                    {recruiter.email}
                  </a>
                )}
                {editProfile && (
                  <div className="text-sm flex flex-row justify-around bg-white rounded-lg shadow cursor-pointer ml-4">
                    <button
                      className={labelClass(true)}
                      onClick={async () => {
                        const updatedUser = { ...recruiter, email_shown: true };
                        const newUser = await updateUser(updatedUser);
                        setRecruiter(newUser);
                        setEmailShown(true);
                      }}
                    >
                      <span>Show</span>
                    </button>
                    <div
                      className={`${
                        emailShown ? "opacity-0" : ""
                      } w-1 bg-gray-200 my-2`}
                    />
                    <button
                      className={labelClass(false)}
                      onClick={async () => {
                        const updatedUser = {
                          ...recruiter,
                          email_shown: false,
                        };
                        const newUser = await updateUser(updatedUser);
                        setRecruiter(newUser);
                        setEmailShown(false);
                      }}
                    >
                      <span>Hide</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {currentUser?._id === recruiter._id && (
            <div className="mt-3">
              {editProfile === false ? (
                <PrimaryButton
                  bgClass="w-full"
                  text={"Edit Profile"}
                  icon={<FaPencilAlt />}
                  onClick={() => {
                    navigate("edit");
                  }}
                />
              ) : (
                <PrimaryButton
                  bgClass="w-full"
                  text={"Done"}
                  icon={<FaCheckCircle />}
                  onClick={() => {
                    navigate("/profile");
                  }}
                />
              )}
            </div>
          )}
          <UserProfileHeading title="Summary" />
          <div className="flex gap-1">
            {(!editProfile || (editProfile && !editingSummary)) &&
              recruiter.summary}
            {editProfile && !editingSummary && (
              <PrimaryButton
                icon={<FaPencilAlt />}
                onClick={() => {
                  setEditingSummary(true);
                }}
              />
            )}
          </div>
          {editProfile && editingSummary && (
            <>
              <textarea
                className="text-primary text-sm border border-border rounded-lg p-3"
                id="summary"
                placeholder="Summary"
                value={newSummary}
                onChange={(e) => {
                  setNewSummary(e.target.value);
                }}
              />
              <div className="flex justify-center gap-1">
                <PrimaryButton
                  text="Save"
                  onClick={async () => {
                    const updatedUser = { ...recruiter, summary: newSummary };
                    const newUser = await updateUser(updatedUser);
                    setEditingSummary(false);
                    setRecruiter(newUser);
                  }}
                />
                <PrimaryButton
                  text="Cancel"
                  onClick={() => {
                    setNewSummary(recruiter.summary);
                    setEditingSummary(false);
                  }}
                />
              </div>
            </>
          )}
        </div>
      )}

      {companies.map((company, index) => (
        <div
          key={index}
          className={"cursor-pointer"}
          onClick={() => {
            navigate("/companies/" + company._id);
          }}
        >
          <CompanyDetailsCard company={company} />
        </div>
      ))}
    </div>
  );
}
