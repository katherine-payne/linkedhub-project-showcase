import "./App.css";
import Toolbar from "./toolbar";
import SearchFeed from "./SearchFeed";

export default function App() {
  return (
    <div className="bg-slate-50">
      <Toolbar />
      <SearchFeed query={"tuiter-react-web-app"} />
    </div>
  );
}
