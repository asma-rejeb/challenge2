import React from "react";
import video from "../assets/video.mp4";
import MediaControlCard from "./../main.js";
const Background = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={video} controls loop muted   preload="metadata"/>
      <div className="content">
        <h1>Liste de produits</h1>

        <MediaControlCard />
      </div>
    </div>
  );
};

export default Background;
