import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import './App.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Post from "./Pages/Post/Post";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UserProfile from "./Pages/UserProfile/UserProfile";
function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="Containerone">
        <SideBar />
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="post" element={<Post />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
