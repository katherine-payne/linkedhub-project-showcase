import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";

type User = {
  name: string;
  contact_info: {
    email: string;
    phone: string;
  };
  experience: Array<Experience>;
  education: Array<Education>;
  skills: Array<string>;
  projects: Array<Project>;
};

export default User