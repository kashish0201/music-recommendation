import { useSetRecoilState } from 'recoil';
import { songQueue, nowPlaying } from '../atoms';

const useAudioPlayer = (audioUrl) => {
    const setSongQueue = useSetRecoilState(songQueue);
    const setPlaying = useSetRecoilState(nowPlaying);

    const handleSongSelect = (index, songList) => {
        setSongQueue(songList);
        setPlaying(index);
    }

    return { handleSongSelect };
}

export default useAudioPlayer;