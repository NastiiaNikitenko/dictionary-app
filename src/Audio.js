import React, { useState } from "react";

export default function Audio(props) {
  const [audio, setAudio] = useState("");
  const [playing, setPlaying] = useState(false);

  const handleAudio = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return <button onClick={handleAudio}>🔈</button>;
}
