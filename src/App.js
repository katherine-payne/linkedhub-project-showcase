import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import Toolbar from "./toolbar";
import SearchFeed from "./SearchFeed";
import UserProfile from "./user-profile";

export default function App() {
  return (
    <div className="bg-slate-50">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route index element={<h1>Main Feed</h1>} />
          <Route path="/search/:query" element={<SearchFeed />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
