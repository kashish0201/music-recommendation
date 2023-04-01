import React from 'react'
import LeftNav from '../components/LeftNav'
import RightNav from '../components/RightNav'
import '../styles/GenrePage.css'
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

    console.log(songList)
    return ( 
        <div className='genreContainer'>
            <LeftNav></LeftNav>
            <div className="main">
                <h1 className='genreHeading'>Liked Songs</h1>

                <ul className='songList'>
                    {songList.map((song,index) => {
                        return (
                            // <li>{song.name}</li>
                            <SongCard key={index} id = {song.id} name = {song.name}/>
                        );
                    })}
                </ul>
            </div>

            <RightNav></RightNav>
            {/* <PlayerContainer
                likedSongs={likedSongs}
                setLikedSongs={setLikedSongs}
            /> */}
        </div>
     );
}
 
export default LikedSongs;