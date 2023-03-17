import React from "react";
import CompanyDetailsCard from "src/Components/CompanyDetailsCard";
import { examplesBCG } from "src/Examples/example-company";

export default function RecruiterPage({ recruiter }: { recruiter: Recruiter }) {
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-4 max-w-xl font-serif">
        <div className="flex flex-row items-center gap-4">
          <img
            className="w-16 h-16 rounded-full object-cover shadow-md"
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

      <CompanyDetailsCard company={examplesBCG} />
    </div>
  );
}
