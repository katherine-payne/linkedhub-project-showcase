import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import CompanyDetailsCard from "../Components/CompanyDetailsCard";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import Company from "src/Types/Company";
import Recruiter from "src/Types/Recruiter";
import { getCompany, updateCompany } from "src/services/company-service";

/* eslint-disable */

export default function CompanyPage() {
  const { cid } = useParams();

  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (cid) {
      async function fetchData() {
        if (cid) {
          const r = await getCompany(cid);
          setCompany(r);
        }
      }
      fetchData();
    } else {
      console.log("Company ID not found in URL");
    }
  }, [cid]);

  return (
    <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:items-start mx-4">
      {company && company.requests.length > 0 && (
        <div className="max-w-xl w-full md:max-w-xs bg-white shadow-md border border-border-neutral p-4 rounded-lg">
          <p className="text-xl text-primary font-semibold pb-1">Requests</p>
          <ul>
            {company &&
              company.requests.map((recruiter: Recruiter, index: number) => {
                return (
                  <li
                    key={index}
                    className="flex flex-row justify-between my-2 items-center gap-6"
                  >
                    {recruiter.name}

                    <div className="flex flex-row gap-1">
                      <PrimaryButton
                        onClick={async () => {
                          let updatedCompany = { ...company };
                          updatedCompany.requests =
                            updatedCompany.requests.filter(
                              (r) => r._id !== recruiter._id
                            ); // remove from requests
                          updatedCompany.recruiters.push(recruiter); // add to recruiters
                          const r: Company = await updateCompany(
                            updatedCompany
                          );
                          setCompany(updatedCompany);
                        }}
                        icon={<BsCheckCircleFill />}
                        iconClass="text-emerald-400 group-hover:text-emerald-600"
                      />
                      <PrimaryButton
                        onClick={async () => {
                          let updatedCompany = { ...company };
                          updatedCompany.requests =
                            updatedCompany.requests.filter(
                              (r) => r._id !== recruiter._id
                            ); // remove from requests
                          // updatedCompany.recruiters.push(recruiter) // add to recruiters
                          const r: Company = await updateCompany(
                            updatedCompany
                          );
                          setCompany(updatedCompany);
                        }}
                        icon={<BsXCircleFill />}
                        iconClass="text-rose-400 group-hover:text-rose-600"
                      />
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {company && <CompanyDetailsCard company={company} />}

        <div className="max-w-xl bg-white shadow-md border border-border-neutral p-4 rounded-lg">
          <p className="text-xl text-primary font-semibold pb-3">Recruiters</p>
          <ul>
            {company &&
              company.recruiters.map((recruiter: Recruiter, index: number) => {
                // TODO: this should link to the recruiter's page on click, but we should wait for node.js to be setup
                return (
                  <li
                    key={index}
                    className="flex flex-row justify-between rounded-lg bg-gray-100 hover:shadow p-3 my-2 hover:cursor-pointer"
                  >
                    <div>{recruiter.name}</div>
                    {recruiter.email_shown && (
                      <a
                        href={`mailto:${recruiter.email}`}
                        className="italic text-accent hover:underline"
                      >
                        {recruiter.email}
                      </a>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
