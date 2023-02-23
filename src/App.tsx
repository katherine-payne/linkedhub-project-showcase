import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import MainFeed from "./MainFeed";
import Toolbar from "./toolbar";
import SearchFeed from "./SearchFeed";
import UserProfile from "./user-profile";
import React from "react";

export default function App() {
  return (
    <div className="bg-slate-50">
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