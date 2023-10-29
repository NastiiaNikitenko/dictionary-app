import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio}>🔈</a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
