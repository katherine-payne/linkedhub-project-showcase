type Company = {
  _id: string;
  name: string;
  summary: string;
  image_url: string;
  recruiters: Array<string>;
  requests: Array<string>;
};

export default Company;
