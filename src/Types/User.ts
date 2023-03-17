export type Experience = {
   role: string,
   company: string,
   location: string,
   start: string | null,
   end: string | null,
   description: string
 }
 
 export type Education =  {
   university: string,
   degree: string,
   major: string,
   gpa: number,
   start: string | null,
   end: string | null,
 }
 
 export type Project = {
   name: string,
   hearts: number,
   description: string,
   languages: Array<string>,
   tags: Array<string>,
 }
 
 export type User = {
   name: string,
   contact_info: {
     email: string,
     phone: string
   },
   experience: Array<Experience>,
   education: Array<Education>,
   skills: Array<string>,
   projects: Array<Project>
 }