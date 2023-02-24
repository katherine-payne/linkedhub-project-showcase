import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import MainFeed from "./Home/MainFeed";
import Toolbar from "./NavigationBar/NavigationBar";
import SearchFeed from "./Search/SearchFeed";
import UserProfile from "./Profile/UserProfile";
import React from "react";

export default function App() {
  return (
    <div className="bg-background-neutral">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route index element={<MainFeed />} />
          <Route path="/search/:query" element={<SearchFeed />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
