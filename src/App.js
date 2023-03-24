import './styles/App.css';
// import { NavLink } from "react-router-dom";

import Home from './Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Classify from './Classify';

import { Routes, Route, Navigate } from "react-router-dom";
import { user } from './atoms'
import { useRecoilValue } from 'recoil';


function App() {

  const loggedIn = useRecoilValue(user);

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
          </>
        )
      }
    </Routes>
  );
}

export default App;
