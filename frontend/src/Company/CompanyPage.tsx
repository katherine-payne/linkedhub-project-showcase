import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import CompanyDetailsCard from "../Components/CompanyDetailsCard";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import Company from "src/Types/Company";
import { getCompany, updateCompany } from "src/services/company-service";
import User from "src/Types/User";
import { getUser } from "src/services/user-service";
import { FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import Role from "src/Types/Role";

/* eslint-disable */

export default function CompanyPage() {
  const { cid } = useParams();

  const { currentUser } = useSelector((state: RootState) => state.users);

  const [company, setCompany] = useState<Company | null>(null);
  const [recruiters, setRecruiters] = useState<Array<User>>([]);
  const [requests, setRequests] = useState<Array<User>>([]);

  // TODO: check performance / if there is a better way to do this
  // TODO: set loading indicator while project feed loads
  useEffect(() => {
    async function fetchData() {
      if (company?.recruiters) {
        company.recruiters.forEach(async (rid) => {
          const recruiter: User = await getUser(rid);
          if (!recruiters.includes(recruiter)) {
            setRecruiters([...recruiters, recruiter]);
          }
        });
      }
    }
    fetchData();
  }, [company]);

  // TODO: check performance / if there is a better way to do this
  // TODO: set loading indicator while project feed loads
  useEffect(() => {
    async function fetchData() {
      if (company?.requests) {
        company.requests.forEach(async (rid) => {
          const request: User = await getUser(rid);
          if (!requests.includes(request)) {
            setRequests([...requests, request]);
          }
        });
      }
    }
    fetchData();
  }, [company]);

  const navigate = useNavigate();

  const validRequester = () => {
    return (
      currentUser?.role === Role.Recruiter &&
      !company?.requests.includes(currentUser._id) &&
      !company?.recruiters.includes(currentUser._id)
    );
  };

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
              requests.map((recruiter: User, index: number) => {
                requests;
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
                              (r) => r !== recruiter._id
                            ); // remove from requests
                          updatedCompany.recruiters.push(recruiter._id); // add to recruiters
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
                              (r) => r !== recruiter._id
                            ); // remove from requests
                          // updatedCompany.recruiters.push(recruiter) // add to recruiters
                          const r: Company = await updateCompany(
                            updatedCompany
                          );
                          setCompany(updatedCompany);
                          console.log("updated", updatedCompany);
                          console.log("company", r);
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
      <div className="flex flex-col items-center gap-4">
        {company && (
          <>
            <CompanyDetailsCard company={company} />
            {validRequester() && (
              <PrimaryButton
                text={"Request to Join"}
                bgClass={"w-60"}
                icon={<FaPaperPlane />}
                onClick={async () => {
                  let updatedCompany = company;
                  if (currentUser) {
                    updatedCompany.requests = [...updatedCompany.requests, currentUser._id];
                    console.log(updatedCompany.requests);
                    await updateCompany(updatedCompany);
                    setCompany(updatedCompany);
                  }
                }}
              />
            )}
          </>
        )}

        {(company?.recruiters.length ?? 0) > 0 && (
          <div className="max-w-xl bg-white shadow-md border border-border-neutral p-4 rounded-lg">
            <p className="text-xl text-primary font-semibold pb-3">
              Recruiters
            </p>
            <ul>
              {company &&
                recruiters.map((recruiter: User, index: number) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        navigate("/recruiters/" + recruiter._id);
                      }}
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
        )}
      </div>
    </div>
  );
}
