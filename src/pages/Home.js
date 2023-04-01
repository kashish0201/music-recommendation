import Genre from '../components/Genre';
import LeftNav from '../components/LeftNav';
import MusicPlayer from '../components/MusicPlayer';
import PlayerContainer from '../components/PlayerContainer';
import RightNav from '../components/RightNav';
import TopNav from '../components/TopNav';

import '../styles/App.css'
import '../styles/main.css'

const Home = () => {
    return (
        <div className="App">
            <LeftNav></LeftNav>
            <div className='main'>
                <TopNav></TopNav>
                <Genre></Genre>
            </div>
            <RightNav></RightNav>
        </div>
    )
}

export default Home;