import './styles/App.css';
// import { NavLink } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Classify from './pages/Classify';
import GenrePage from './pages/GenrePage';
import LikedSongs from './pages/LikedSongs';

import { Routes, Route, Navigate } from "react-router-dom";
import { user } from './atoms'
import { useRecoilValue } from 'recoil';
import Search from './pages/Search';


function App() {

  const loggedIn = useRecoilValue(user)?.user;

  return (
    <Routes>
      {
        !loggedIn ? (
          <>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />}/>
            <Route path="/classify" element={<Classify/>} />
            <Route path='/genrepage/:genre' element={<GenrePage/>} />
            <Route path="/like" element={<LikedSongs/>} />
            <Route path="/search" element={<Search />} />
          </>
        )
      }
    </Routes>
  );
}

export default App;
