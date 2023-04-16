import React from 'react'
import { useParams } from 'react-router'
import withWrapper from '../Wrapper'
import { useState, useEffect } from 'react'
import axiosInstance from '../axios'
import SongCard from '../components/SongCard'
import useAudioPlayer from '../hooks/useAudioPlayer'
import { useSetRecoilState } from 'recoil';
import { songQueue, nowPlaying } from '../atoms';


function GenrePage() {
    const { genre } = useParams();
    const [songList, setSongList] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axiosInstance.get(`music/genre/${genre}`).then(res => {
            setSongList(res.data.songs);
        }).catch(e => {
            setError(e);
        })
    }, [genre])

    const { handleSongSelect } = useAudioPlayer();

    const songSelect = (index) => {
        handleSongSelect(index, songList);
    }

    return (
        <div className='container'>
            <div className='genreContainer'>
                <h3 className='genreHeading'>{genre}</h3>

                <ul className='songList'>
                    {songList.map((song,index) => {
                        return (
                            <SongCard key={index} index={index} id = {song.id} name = {song.name} isLiked = {song.isLiked} songSelect={songSelect}  />
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default withWrapper(GenrePage)