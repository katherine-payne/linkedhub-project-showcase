import axios from "axios";
import Company from "src/Types/Company";
import BASE_URL from "./service-helper";

const COMPANIES_API = BASE_URL + "companies"

export const getCompany = async (cid: string) => {
   const response = await axios.get(COMPANIES_API + "/" + cid)
   return response.data 
}

export const addCompany = async (company: Company) => {
   const response = await axios.post(COMPANIES_API, company)
   return response.data
}

export const updateCompany = async (company: Company) => {
   const response = await axios.put(COMPANIES_API + "/" + company._id, company)
   return response.data
}

export const deleteCompany = async (company: Company) => {
   const response = await axios.delete(COMPANIES_API + "/" + company._id)
   return response.data
}