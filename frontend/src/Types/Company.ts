import Recruiter from "./Recruiter";

type Company = {
   name: string; // unique
   summary: string; // limit to 150 characters
   image_url: string;
   recruiters: Array<Recruiter>
   requests: Array<Recruiter>
}

export default Company