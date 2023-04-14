import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Provider } from "react-redux";
import "./App.css";
import MainFeed from "./Home/MainFeed";
import Toolbar from "./NavigationBar/NavigationBar";
import SearchFeed from "./Search/SearchFeed";
import UserProfile from "./Profile/UserProfile";
import React from "react";
import AddProject from "./AddProject/AddProject";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import CompanyPage from "./Company/CompanyPage";
import RecruiterPage from "./Recruiter/RecruiterPage";
import CompaniesListPage from "./Company/CompaniesListPage";
import RecruitersListPage from "./Recruiter/RecruitersListPage";
import AddCompany from "./AddCompany/AddCompany";
import LanguagesPage from "./TagPages/LanguagesPage";
import TagsPage from "./TagPages/TagsPage";
import RegisterPage from "./LoginPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import store from "./redux/store";
import CurrentUserContext from "./redux/current-user-context";

export default function App() {
  return (
    <div className="bg-background-neutral">
      <Provider store={store}>
        <CurrentUserContext>
          <BrowserRouter>
            <Toolbar />
            <Routes>
              <Route index element={<MainFeed />} />
              <Route path="/search/:query" element={<SearchFeed />} />
              <Route path="/profile/:uid" element={<UserProfile />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route
                path="/profile/edit"
                element={<UserProfile editProfile={true} />}
              />
              <Route path="/add/project" element={<AddProject />} />
              <Route path="/add/company" element={<AddCompany />} />
              <Route path="/companies/:cid" element={<CompanyPage />} />
              <Route path="/companies" element={<CompaniesListPage />} />
              <Route path="/recruiters/:rid" element={<RecruiterPage />} />
              <Route path="/recruiters" element={<RecruitersListPage />} />
              <Route path="/projects/:pid" element={<ProjectDetails />} />
              <Route path="/languages/:lang" element={<LanguagesPage />} />
              <Route path="/tags/:tag" element={<TagsPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </CurrentUserContext>
      </Provider>
    </div>
  );
}
