type Project = {
  _id: string;
  name: string;
  hearts: number;
  description: string;
  languages: Array<string>;
  tags: Array<string>;
  images: Array<string>
  uid: string
};

export default Project