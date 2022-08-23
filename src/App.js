import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import MediaControlCard from "./main.js";
import Background from "./components/Background";
function App() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="App">
      <Background />
      {/* 
      <MediaControlCard/>    
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          // onClose={() => setOpen(false)}
        />

        {/* <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button> 
      */}
    </div>
  );
}

export default App;
