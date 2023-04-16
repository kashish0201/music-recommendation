import { useRecoilValue } from 'recoil';
import { songQueue, nowPlaying } from '../atoms';
import axiosInstance from '../axios';
import { useDebounce } from 'react-use';
import { useState } from 'react';
import SongCard from './SongCard';
import useAudioPlayer from '../hooks/useAudioPlayer';

function RightNav() {

    const songQueueValue = useRecoilValue(songQueue);
    const nowPlayingIndex = useRecoilValue(nowPlaying);

    const currentSongId = songQueueValue[nowPlayingIndex]?.id;

    const [similarSongs, setSimilarSongs] = useState([]);

    useDebounce(() => {
        axiosInstance.post(`music/similar`, {
            song: currentSongId
        }).then(res => {
            setSimilarSongs(res.data.data);
        }).catch(e => {
            console.log(e);
        })
    }, 1000, [currentSongId])

    const { handleSongSelect } = useAudioPlayer();

    const songSelect = (index) => {
        handleSongSelect(index, similarSongs);
    }

    if (!currentSongId) {
        return (
            ""
        )
    }

    return (
        <>
            <div className="rightNav">    
                <h1 className='welcome'>Liked what you're hearing?</h1>
                <h2 className='greeting'>Here's a list of songs handpicked just for you!</h2>
                {
                    similarSongs.length > 0 && (
                        similarSongs.map((song, index) => {
                            return (
                                <SongCard key={index} index={index} id = {song.id} name = {song.name} isLiked = {song.isLiked} songSelect={songSelect} />
                            )
                        })
                    )
                }     
            </div>
        </>
    )
}

export default RightNav;