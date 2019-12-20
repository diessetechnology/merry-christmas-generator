import React from "react";
import SnowStorm from "react-snowstorm";
import { useLocation } from "react-router-dom";

import Sound from "react-sound";

import "./styles.css";

export default function Auguri() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const song = new Buffer(query.get("song"), "base64").toString("ascii");
  return (
    <div>
        <audio id="player" autoPlay>
            <source src={song} type="audio/mp3"/>
        </audio>
      <SnowStorm flakesMaxActive={100} flakesMax={350} />
      <div className={"biglietto"}>
          <div className={"testo"}>
        <h1>Buon Natale,</h1>
        <h1>{new Buffer(query.get("message"), "base64").toString("ascii")},</h1>
        <h1>
          Buon Natale a te,
          {new Buffer(query.get("name"), "base64").toString("ascii")}
        </h1>
          </div>
      </div>
    </div>
  );
}
