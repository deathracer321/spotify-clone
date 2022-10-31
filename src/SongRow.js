import React, { useContext } from "react";
import "./SongRow.css";

import { AllContextProvider } from "./App";

function SongRow({ eachTrack }) {
  const { currentTrack, setCurrentTrack } = useContext(AllContextProvider);

  const handleChooseSong = () => {
    setCurrentTrack(eachTrack);
  };

  return (
    <div className="songRow" onClick={handleChooseSong}>
      <img
        className="songRow__album"
        src={eachTrack.album.images[0]?.url}
        alt="each track"
      />
      <div className="songRow__info">
        <h1>
          {eachTrack.name !== "Undefined" && eachTrack.name !== "undefined"
            ? eachTrack.name
            : ""}
        </h1>
        <p>
          {eachTrack.artists.map((artist) => artist.name).join(", ")}

          {eachTrack.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
