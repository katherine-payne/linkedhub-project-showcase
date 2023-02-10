import './App.css';
import Toolbar from './toolbar';
import SearchFeed from './SearchFeed';

export default function App() {
    return (
        <div>
            <Toolbar />
            <SearchFeed query={"tuiter-react-web-app"} />
        </div>
    )
}