import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { AllContextProvider } from "./App";

function Header() {
  const { user, search, setSearch } = useContext(AllContextProvider);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />

        <input
          type="text"
          placeholder="search for artist,Songs"
          onChange={(eve) => setSearch(eve.target.value)}
          value={search}
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.user.images[0]?.url} alt={user?.user.display_name} />
        <h4>{user?.user.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
