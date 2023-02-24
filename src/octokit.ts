import { Octokit } from "@octokit/core";

const octokit = new Octokit({
   auth: 'YOUR-TOKEN'
 })

export default octokit