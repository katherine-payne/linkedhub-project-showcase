import './App.css';
import UserProfile from './user-profile';
import MainFeed from './MainFeed';
import Toolbar from './toolbar';

export default function App() {
    return (
        <div>
            <Toolbar />
            <MainFeed /> {/* We should get navigation set up; I think we need to wait for Node/Express/Next.js before we do that */}
            {/* <UserProfile /> */}
        </div>
    )
}