import React from 'react'
import MusicPlayer from './MusicPlayer'
import '../styles/PlayerContainer.css'
import { useState } from 'react';

function PlayerContainer(props) {
  
  return (
      <div className='container_'>
      <MusicPlayer
        likedSongs={props.likedSongs}
        setLikedSongs={props.setLikedSongs}
      />    
      </div>
  )
}

export default PlayerContainer