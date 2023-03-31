import axios from "axios";
import Recruiter from "src/Types/Recruiter";
import BASE_URL from "./service-helper";

const RECRUITERS_API = BASE_URL + "recruiters";

export const getRecruiters = async () => {
  const response = await axios.get(RECRUITERS_API);
  return response.data;
};

export const getRecruiter = async (rid: string) => {
  const response = await axios.get(RECRUITERS_API + "/" + rid);
  return response.data;
};

export const addRecruiter = async (recruiter: Recruiter) => {
  const response = await axios.post(RECRUITERS_API, recruiter);
  return response.data;
};

export const updateRecruiter = async (recruiter: Recruiter) => {
  const response = await axios.put(RECRUITERS_API + "/" + recruiter._id, recruiter);
  return response.data;
};

export const deleteRecruiter = async (rid: string) => {
  const response = await axios.delete(RECRUITERS_API + "/" + rid);
  return response.data;
};
