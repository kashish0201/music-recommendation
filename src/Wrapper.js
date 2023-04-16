import { useRecoilState, useRecoilValue } from 'recoil';
import { nowPlaying, songQueue } from './atoms';
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';

function withWrapper(WrappedComponent) {

  return function Wrapper(props) {
    const songQueueValue = useRecoilValue(songQueue);
    const [nowPlayingState, setNowPlayingState] = useRecoilState(nowPlaying);
    
    function getDirectLink(gDriveUrl) {
      if (!gDriveUrl) return null;
      const fileId = gDriveUrl.match(/\/d\/(.+?)\//)[1];
      const directLink = `https://drive.google.com/uc?id=${fileId}`;
      return directLink;
    }  

    const handleNext = () => {
      if (nowPlayingState < songQueueValue.length - 1) {
        setNowPlayingState(nowPlayingState + 1);
      }
    };

    const handlePrev = () => {
      if (nowPlayingState > 0) {
        setNowPlayingState(nowPlayingState - 1);
      }
    };

    return (
        <div className="App">
            <LeftNav />
            <div className='main'>
                <WrappedComponent {...props} />
                <div className="audioPlayerContainer">
                  <AudioPlayer
                    src={getDirectLink(songQueueValue[nowPlayingState]?.url)}
                    showSkipControls={true}
                    autoPlay={false}
                    onClickNext={handleNext}
                    onClickPrevious={handlePrev}
                    onEnded={handleNext}
                  />
                </div>
            </div>
            <RightNav />
        </div>
    );
  };
}

export default withWrapper;