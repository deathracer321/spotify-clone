import "./App.css";
import Login from "./Login";
import React, { useEffect, useState } from "react";
import { loginUrl, getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { createContext, useContext, useReducer } from "react";

const spotify = new SpotifyWebApi();
export const AllContextProvider = createContext();

function App() {
  //remove the below inital value after dev
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [item, setItem] = useState(null);
  const [discoverWeekly, setDiscoverWeekly] = useState(null);
  const [search, setSearch] = useState();
  const [fetchedSearchItems, setFetchedSearchItems] = useState(null);
  const [currentTrack, setCurrentTrack] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();

    const _token = hash.access_token;
    if (_token) {
      setToken((prevToken) => ({
        ...prevToken,
        _token,
      }));
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        setUser((prevUser) => ({
          ...prevUser,
          user,
        }));
      });
    }
    // spotify.getUserPlaylists().then((gotPlaylists) => {
    //   setPlaylists((prevPlaylists) => ({
    //     ...prevPlaylists,
    //     gotPlaylists,
    //   }));
    // });
    spotify.getPlaylist("6tNWbUNMre5RIlnVlBFljj").then((response) => {
      setDiscoverWeekly(response);
    });
    window.location.hash = "";
  }, []);

  useEffect(() => {
    spotify.searchTracks(search).then((res) => {
      setFetchedSearchItems(res.tracks.items);
    });
  }, [search]);

  return (
    <div className="App">
      <AllContextProvider.Provider
        value={{
          token,
          setToken,
          user,
          setUser,
          playlists,
          setPlaylists,
          playing,
          setPlaying,
          item,
          setItem,
          discoverWeekly,
          setDiscoverWeekly,
          search,
          setSearch,
          fetchedSearchItems,
          setFetchedSearchItems,
          currentTrack,
          setCurrentTrack,
        }}
      >
        {token ? <Player spotify={spotify} /> : <Login />}
      </AllContextProvider.Provider>
    </div>
  );
}

export default App;
