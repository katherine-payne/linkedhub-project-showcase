import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCompanies } from "src/services/company-service";
import CompanyDetailsCard from "../Components/CompanyDetailsCard";
import Company from "../Types/Company";

export default function CompaniesListPage() {
  const [companies, setCompanies] = useState<Array<Company>>([]);
  useEffect(() => {
    async function fetchData() {
      const c = await getCompanies();
      setCompanies(c);
    }
    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-4">
      <div className="max-w-xl w-full flex flex-col items-start">
      <p className="mb-2 font-serif font-bold text-3xl">Companies</p>
      </div>
      {companies.map((c, index) => (
        <div key={index} className="cursor-pointer mb-4" onClick={() => navigate(c._id)}>
          <CompanyDetailsCard company={c} />
        </div>
      ))}
    </div>
  );
}
