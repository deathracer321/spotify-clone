import React, { useContext } from "react";
import "./Body.css";
import Header from "./Header";
import { AllContextProvider } from "./App";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const { discoverWeekly, fetchedSearchItems } = useContext(AllContextProvider);

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          className="body__infoImage"
          src={discoverWeekly?.images[0].url}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* {discoverWeekly?.tracks.items.map((item, index) => {
          return <SongRow key={index} track={item.track} />;
        })} */}

        {fetchedSearchItems?.map((item, index) => {
          return <SongRow key={index} eachTrack={item} />;
        })}
      </div>
    </div>
  );
}

export default Body;
