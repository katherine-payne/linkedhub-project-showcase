import React, { useEffect, useState } from "react";
import CompanyDetailsCard from "src/Components/CompanyDetailsCard";
import { useNavigate, useParams } from "react-router";
import Company from "src/Types/Company";
import { getCompanyForRID } from "src/services/company-service";
import User from "src/Types/User";
import { getUser } from "src/services/user-service";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

export default function RecruiterPage() {
  const { rid } = useParams();
  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const [recruiter, setRecruiter] = useState<User | null>(null);
  const [companies, setCompanies] = useState<Array<Company>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const r: User = rid !== undefined ? await getUser(rid) : currentUser;
      const c: Array<Company> = await getCompanyForRID(rid ?? r._id);
      setRecruiter(r);
      setCompanies(c);
    }
    fetchData();
  }, [rid, currentUser]);

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
              {recruiter.email_shown && (
                <a
                  href={"mailto:" + recruiter.email}
                  className="text-secondary hover:text-accent hover:underline"
                >
                  {recruiter.email}
                </a>
              )}
            </div>
          </div>
          {recruiter.summary}
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
