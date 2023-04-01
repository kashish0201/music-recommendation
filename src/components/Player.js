//Player.js

import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  // var likedSongs = props.likedSongs;
  // var setLikedSongs = props.setLikedSong;
  
  var status = "inactive";
  // function checkStatus() {
  //   if (props.likedSongs.indexOf(props.songs[props.currentSongIndex]) !== -1) {
  //     status = "active"
  //     return true;
  //   }
  // }
  
  function likeSong() {
    if(status === "inactive") {
      props.setLikedSongs((oldSongs) => {
        return [...oldSongs, props.songs[props.currentSongIndex]]
      }) 
    }
    else {
      props.setLikedSongs((oldSongs) => {
        return oldSongs.filter( (Element) => {
          return Element !== props.songs[props.currentSongIndex]
        })
      }) 
    }
  }


  return (
    <>
      
      <div className="music-player">
        <PlayerDetails song={props.songs[props.currentSongIndex]} />
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioElement}
        ></audio>

        {/* {checkStatus()} */}

        

        <div class="player__footer">
          
          <ul class="list list--footer">
            <li className="more-btns">
              <button className="list__link" onClick={likeSong} id={status}>
                <i class="fa fa-heart-o"></i>
              </button>
            </li>

            {/* <li>
              <a href="#" class="list__link">
                <i class="fa fa-random"></i>
              </a>
            </li> */}

            <PlayerControls
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              SkipSong={SkipSong}
            />

            <li className="more-btns">
              <button className="list__link">
                View Liked Songs
                {/* <i class="fa fa-undo"></i> */}
              </button>
            </li>

            {/* <li>
              <a href="#" class="list__link">
                <i class="fa fa-ellipsis-h"></i>
              </a>
            </li> */}
          </ul>
        </div>

        {/* <h4>Lofi Music Player React </h4> */}
      </div>
    </>
  );
}
export default Player;