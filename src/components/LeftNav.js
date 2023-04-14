import Logo from '../images/musical-note.png'
import HomeIcon from '../images/home-icon.png'
import SearchIcon from '../images/search-icon.png'
import HeartIcon from '../images/heart-icon.png'
import MicIcon from '../images/mic-icon.png'
import axiosInstance from "../axios";
import { useSetRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../atoms";
import { useState } from 'react';


function LeftNav() {
    const setUser = useSetRecoilState(user);
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const handleSubmit = (e) => {

        e.preventDefault();
        setError(false);
        axiosInstance
            .post(`auth/logout`)
            .then((res) => {
                localStorage.setItem(
                    "token",
                    null
                );

                
                setUser({user: null});

                navigate("/");
            })
            .catch((err) => {
                setError(true);
            });
    }
    return (
        <>
            <div className="leftNav">
                <div className="logoContainer">
                    <img src={Logo} alt='Logo' className='logo'></img>
                </div>
                <div className='nav'>
                    <Link to='/' className='navIcon'>
                        <img src={HomeIcon} alt="" />
                    </Link>
                    <Link to='/search' className='navIcon'>
                        <img src={SearchIcon} alt="" />
                    </Link>
                    <Link to='/like' className='navIcon'>
                        <img src={HeartIcon} alt="" />
                    </Link>
                    <a href='https://ssoham10-music-classification-app-7worxz.streamlit.app/' className='navIcon'>
                        <img src={MicIcon} alt="" />
                    </a>
                </div>
                <div className='logoutContainer'>
                    <button onClick = { handleSubmit } className='logout' >Logout</button>
                </div>
            </div>
        
        </>
    )
}

export default LeftNav;