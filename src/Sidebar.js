import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { AllContextProvider } from "./App";

function Sidebar() {
  const { playlists } = useContext(AllContextProvider);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://cdn.dribbble.com/users/441326/screenshots/3165191/spotify-gif---oliver-keane.gif"
        alt="logo"
      />
      <img
        className="sidebar__logo"
        src="https://logos.textgiraffe.com/logos/logo-name/harish-designstyle-cartoon-m.png"
        alt="logo"
      />
      {window.innerWidth > 600 ? (
        <div>
          <SidebarOption title="Home" Icon={HomeIcon} />
          <SidebarOption title="Search" Icon={SearchIcon} />
          <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
          <br />

          <strong className="sidebar__title">PLAYLISTS</strong>
          <hr />
          {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
          ))}

          <SidebarOption title="hip hop" />
          <SidebarOption title="rock" />
          <SidebarOption title="melody" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Sidebar;
