import React from "react";
import "./Login.css";
import { loginUrl, getTokenFromUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://cdn.dribbble.com/users/441326/screenshots/3165191/spotify-gif---oliver-keane.gif"
        alt="logo"
      />
      <a href={loginUrl} className="login__hyperlink">
        Login with Spotify
      </a>
    </div>
  );
}

export default Login;
