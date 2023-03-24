import './styles/LeftNav.css';
import Logo from './images/musical-note.png'
import HomeIcon from './images/home-icon.png'
import SearchIcon from './images/search-icon.png'
import HeartIcon from './images/heart-icon.png'
import MicIcon from './images/mic-icon.png'

function LeftNav() {
    return (
        <>
            <div className="leftNav">
                {/* <img src="https://www.transparentpng.com/thumb/musical-notes/music-note-red-images-clip-art--35.png" alt='' className='logo'></img> */}
                
                <img src={Logo} alt="" className='logo' />
                <div className='nav'>
                    <img src={HomeIcon} alt="" className='navIcon' />
                    <img src={SearchIcon} alt="" className='navIcon' />
                    <img src={HeartIcon} alt="" className='navIcon' />
                    <img src={MicIcon} alt="" className='navIcon' />
                </div>
                
            </div>
        
        </>
    )
}

export default LeftNav;