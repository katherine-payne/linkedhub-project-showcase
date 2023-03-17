import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import MainFeed from "./Home/MainFeed";
import Toolbar from "./NavigationBar/NavigationBar";
import SearchFeed from "./Search/SearchFeed";
import UserProfile from "./Profile/UserProfile";
import React, { useState } from "react";
import AddProject from "./AddProject/AddProject";
import CompanyPage from "./Company/CompanyPage";
import RecruiterPage from "./Recruiter/RecruiterPage";
import { examplesBCG, examplesRecruiters } from "./Examples/example-company";

export default function App() {
  return (
    <div className="bg-background-neutral">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route index element={<MainFeed />} />
          <Route path="/search/:query" element={<SearchFeed />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route
            path="/profile/edit"
            element={<UserProfile editProfile={true} />}
          />
          <Route path="/add" element={<AddProject />} />
          <Route path="/company" element={<CompanyPage company={examplesBCG} />} />
          <Route path="/recruiter" element={<RecruiterPage recruiter={examplesRecruiters[1]} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
