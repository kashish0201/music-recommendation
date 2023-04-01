// App.js

import React from 'react';
import { useState, useEffect } from "react";
import Player from './Player';
import '../styles/MusicPlayer.css';

const MusicPlayer=(props)=> {

const [songs] = useState([
    {
        "title": "MP3 Test",
        "artist": "Peachy!",
        "album": " Shiloh",
        "track": "$orries",
        "year": "1",
        "img_src": "https://raw.githubusercontent.com/pramit-marattha/react-music-player-app/main/public/songs_images/%24orries_Cover%20(front)_e.jpg",
        "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        "title": "WAV Test",
        "artist": "potsu",
        "album": "[oops]",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/[oops]_Cover (front)_e.jpg",
        "src": "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
    },
    {
        "title": "Can We Kiss Forever?",
        "artist": "Kina",
        "album": " Adriana Proenza",
        "track": "Can We Kiss Forever?",
        "year": "1",
        "img_src": "./songs_images/Can We Kiss Forever _Cover (front)_e.jpg",
        "src": "./songs/Can We Kiss Forever .mp3"
    },

]);


const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);



useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex, songs.length])

  return (
    <div className="App">
          <Player currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
              likedSongs={props.likedSongs}
              setLikedSongs={props.setLikedSongs}
          />
    </div>
  );
}

export default MusicPlayer;