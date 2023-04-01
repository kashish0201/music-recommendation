import React from 'react'
import { useParams } from 'react-router'
import LeftNav from '../components/LeftNav'
import PlayerContainer from '../components/PlayerContainer'
import RightNav from '../components/RightNav'
import '../styles/GenrePage.css'
import { useState, useEffect } from 'react'
import axiosInstance from '../axios'
import SongCard from '../components/SongCard'


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
    console.log(songList);
  
    return (
      <>
        
        <div className='genreContainer'>
            <LeftNav></LeftNav>
            <div className="main">
                <h1 className='genreHeading'>{genre}</h1>

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
      </>
  )
}

export default GenrePage