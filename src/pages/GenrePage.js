import React from 'react'
import { useParams } from 'react-router'
import withWrapper from '../Wrapper'
import PlayerContainer from '../components/PlayerContainer'
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

    return (
        <div className='container'>
            <div className='genreContainer'>
                <h1 className='genreHeading'>{genre}</h1>

                <ul className='songList'>
                    {songList.map((song,index) => {
                        return (
                            <SongCard key={index} id = {song.id} name = {song.name} isLiked = {song.isLiked} />
                        );
                    })}
                </ul>
            </div>
            {/* <PlayerContainer
                likedSongs={likedSongs}
                setLikedSongs={setLikedSongs}
            /> */}
        </div>
    )
}

export default withWrapper(GenrePage)