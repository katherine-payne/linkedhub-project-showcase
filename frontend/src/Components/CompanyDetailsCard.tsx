import React from "react";
import Company from "src/Types/Company";

export default function CompanyDetailsCard({ company }: { company: Company }) {
  return (
    <div className="flex flex-row gap-4 max-w-xl bg-white shadow-md border border-border-neutral p-4 rounded-lg font-serif">
      <img
        className="w-24 h-24 aspect-square rounded-full object-cover shadow-md"
        alt="Rounded avatar"
        src={company.image_url}
      />
      <div className="flex flex-col">
        <p className="text-2xl text-primary font-semibold pb-3">
          {company.name}
        </p>
        <p className="text-secondary">{company.summary}</p>
      </div>
    </div>
  );
}
