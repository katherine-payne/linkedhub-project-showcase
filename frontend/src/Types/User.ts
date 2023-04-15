import Education from "./Education";
import Experience from "./Experience";

type User = {
  _id: string;
  name: string;
  role: "admin" | "recruiter" | "poster";
  password: string;
  profile_image_url: string;
  email: string;
  email_shown: boolean;
  summary: string;
  experience: Array<Experience>;
  education: Array<Education>;
  skills: Array<string>;
  projects: Array<string>;
  liked: Array<string>;
  following: Array<string>;
};

export default User
