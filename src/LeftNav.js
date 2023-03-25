import './styles/LeftNav.css';
import Logo from './images/musical-note.png'
import HomeIcon from './images/home-icon.png'
import SearchIcon from './images/search-icon.png'
import HeartIcon from './images/heart-icon.png'
import MicIcon from './images/mic-icon.png'
import axiosInstance from "./axios";
import { useSetRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { user } from "./atoms";
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
                {/* <img src="https://www.transparentpng.com/thumb/musical-notes/music-note-red-images-clip-art--35.png" alt='' className='logo'></img> */}
                
                
                <div className='nav'>
                    <img src={Logo} alt="" className='logo' />
                    <img src={HomeIcon} alt="" className='navIcon' />
                    <img src={SearchIcon} alt="" className='navIcon' />
                    <img src={HeartIcon} alt="" className='navIcon' />
                    <img src={MicIcon} alt="" className='navIcon' />
                </div>
                <div>
                    <button onClick = { handleSubmit } className='logout' >Logout</button>
                </div>
            </div>
        
        </>
    )
}

export default LeftNav;