import React from 'react'
import withWrapper from '../Wrapper'
import { useState, useEffect } from 'react'
import axiosInstance from '../axios'
import SongCard from '../components/SongCard'


const LikedSongs = () => {
    const [songList, setSongList] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        axiosInstance.get(`music/like`).then(res => {
            setSongList(res.data.songs);
        }).catch(e => {
            setError(e);
        })
    }, [])

    return ( 
        <div className="container">
            <h1 className='genreHeading'>Liked Songs</h1>

            <ul className='songList'>
                {songList.map((song,index) => {
                    return (
                        <SongCard key={index} id = {song.id} name = {song.name} isLiked = {song.isLiked} />
                    );
                })}
            </ul>
        </div>
     );
}
 
export default withWrapper(LikedSongs);