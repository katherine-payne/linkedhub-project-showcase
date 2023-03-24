import Language from "./Language";

type Repository = {
  name: string;
  id: number;
  description: string;
  link: string;
  language: string;
  languages_url: string;
  languages: Array<Language>;
  topics: Array<string>;
};

export default Repository
