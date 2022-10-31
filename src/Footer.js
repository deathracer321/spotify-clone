import React, { useContext } from "react";
import "./Footer.css";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import SpotifyPlayer from "react-spotify-web-playback";
import { AllContextProvider } from "./App";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Footer() {
  const { currentTrack, token } = useContext(AllContextProvider);
  console.log(currentTrack);

  const tempVar = { ...currentTrack, name: "" };

  console.log(tempVar);
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={currentTrack?.album.images[0]?.url}
          alt={currentTrack?.name}
        />
        <div className="footer__songInfo">
          {/* {currentTrack?.name !== "Undefined" &&
          currentTrack?.name !== "undefined"
            ? currentTrack.name
            : ""} */}
          {/* <h4>{currentTrack?.name}</h4> */}

          <h4>
            {currentTrack?.name &&
            currentTrack?.name !== "Undefined" &&
            currentTrack?.name !== "undefined"
              ? currentTrack.name
              : ""}
          </h4>

          {/* <p>{currentTrack?.artists[0].name}</p> */}
        </div>
      </div>
      {/* <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div> */}
      <div className="footer__right">
        <AudioPlayer
          autoPlay
          src={currentTrack?.preview_url}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </div>
    </div>
  );
}

export default Footer;
