import React, { useState, useEffect, useContext } from "react";
import { AllContextProvider } from "./App";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const MusicPlayer = () => {
  const { currentTrack } = useContext(AllContextProvider);
  const [playing, toggle] = useAudio(currentTrack?.preview_url);
  console.log(currentTrack?.preview_url);
  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MusicPlayer;
