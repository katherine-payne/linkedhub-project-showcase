export const examplesRecruiters: Array<Recruiter> = [
  {
    _id: 0,
    name: "Ervin Imaculada",
    company_name: "Boston Consulting Group",
    email: "ervin.imaculada@bcg.com",
    email_shown: false,
    image_url: "https://picsum.photos/400",
    summary: "Reprehenderit aute culpa in Lorem incididunt. Occaecat laborum in incididunt do ex labore labore eiusmod et quis. Consectetur esse sit et exercitation cupidatat esse ad consequat nulla officia proident amet."
  },
  {
    _id: 1,
    name: "Prema Matte",
    company_name: "Boston Consulting Group",
    email: "prema.matte@bcg.com",
    email_shown: true,
    image_url: "https://picsum.photos/400",
    summary: "Reprehenderit aute culpa in Lorem incididunt. Occaecat laborum in incididunt do ex labore labore eiusmod et quis. Consectetur esse sit et exercitation cupidatat esse ad consequat nulla officia proident amet."
  },
  {
    _id: 2,
    name: "Zuriel Felicia",
    company_name: "Boston Consulting Group",
    email: "zuriel.felicia@bcg.com",
    email_shown: true,
    image_url: "https://picsum.photos/400",
    summary: "Reprehenderit aute culpa in Lorem incididunt. Occaecat laborum in incididunt do ex labore labore eiusmod et quis. Consectetur esse sit et exercitation cupidatat esse ad consequat nulla officia proident amet."
  },
  {
    _id: 3,
    name: "Abdul Ansel",
    company_name: "Boston Consulting Group",
    email: "abdul.ansel@bcg.com",
    email_shown: false,
    image_url: "https://picsum.photos/400",
    summary: "Reprehenderit aute culpa in Lorem incididunt. Occaecat laborum in incididunt do ex labore labore eiusmod et quis. Consectetur esse sit et exercitation cupidatat esse ad consequat nulla officia proident amet."
  },
];

export const examplesBCG: Company = {
  name: "Boston Consulting Group",
  summary:
    "Boston Consulting Group, Inc. (BCG) is an American global management consulting firm founded in 1963 and headquartered in Boston, Massachusetts.",
  image_url: "https://picsum.photos/400",
  recruiters: [examplesRecruiters[0], examplesRecruiters[1]],
  requests: [examplesRecruiters[2], examplesRecruiters[3]],
};
