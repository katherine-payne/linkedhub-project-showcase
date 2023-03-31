import React, { useEffect, useState } from "react";
import CompanyDetailsCard from "src/Components/CompanyDetailsCard";
import Recruiter from "src/Types/Recruiter";
import { useNavigate, useParams } from "react-router";
import { getRecruiter } from "src/services/recruiter-service";
import Company from "src/Types/Company";
import { getCompanyForRID } from "src/services/company-service";

export default function RecruiterPage() {
  const { rid } = useParams();

  const [recruiter, setRecruiter] = useState<Recruiter | null>(null);
  const [company, setCompany] = useState<Company | null>(null);

const navigate = useNavigate();

  useEffect(() => {
    if (rid) {
      async function fetchData() {
        if (rid) {
          const r: Recruiter = await getRecruiter(rid);
          const c: Company = await getCompanyForRID(rid);
          setRecruiter(r);
          setCompany(c);
        }
      }
      fetchData();
    } else {
      console.log("Company ID not found in URL");
    }
  }, [rid]);

  return (
    <div className="flex flex-col gap-12 items-center">
      {recruiter && (
        <div className="flex flex-col gap-4 max-w-xl font-serif">
          <div className="flex flex-row items-center gap-4">
            <img
              className="w-16 h-16 rounded-full object-cover shadow-md aspect-square"
              alt="Rounded avatar"
              src={recruiter.image_url}
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

      {company && (
        <div className={"cursor-pointer"} onClick={() => {navigate("/companies/" + company._id)}}>
          <CompanyDetailsCard company={company} />
        </div>
      )}
    </div>
  );
}
