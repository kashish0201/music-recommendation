import Genre from './Genre';
import LeftNav from './LeftNav';
import MusicPlayer from './MusicPlayer';
import PlayerContainer from './PlayerContainer';
import RightNav from './RightNav';
import TopNav from './TopNav';


const Home = () => {
    return (
        <div className="App">
            <TopNav></TopNav>
            <LeftNav></LeftNav>
            <RightNav></RightNav>
            <Genre></Genre>
            <PlayerContainer></PlayerContainer>
            {/* <MusicPlayer></MusicPlayer> */}
        </div>
    )
}

export default Home;