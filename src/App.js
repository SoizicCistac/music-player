import {useState, useEffect} from "react";

import Player from "./components/Player";


function App() {

  const [songs] = useState([
    {
      title : "Bad Woman Blues",
      artist: "Beth Hart",
      img_src: "./images/beth-hart.jpg",
      src: "./music/beth-hart.mp3"
    },
    {
      title : "Sheez Music",
      artist: "Dumpstaphunk",
      img_src: "./images/dumpstaphunk.jpg",
      src: "./music/dumpstaphunk.mp3"
    },
    {
      title : "Butter (hotter remix)",
      artist: "BTS",
      img_src: "./images/bts.jpeg",
      src: "./music/bts.mp3" 
    },
    {
      title : "Midnight Highway",
      artist: "Quinn Sullivan",
      img_src: "./images/quinn-sullivan.jpeg",
      src: "./music/quinn-sullivan.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(()=>{
      if (currentSongIndex + 1 > songs.length - 1){
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
