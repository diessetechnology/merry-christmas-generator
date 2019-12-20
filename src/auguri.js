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
        <source src={song} type="audio/mp3" />
      </audio>
      <SnowStorm flakesMaxActive={100} flakesMax={350} />
      <div className={"biglietto"}>
        <div className={"testo"}>
          <h1>Buon Natale,</h1>
          <h1>
            {new Buffer(query.get("message"), "base64").toString("ascii")},
          </h1>
          <h1>
            Buon Natale a te,
            {new Buffer(query.get("name"), "base64").toString("ascii")}
          </h1>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "lightgrey",
          width: "100%",
          marginTop: "auto"
        }}
      >
        {song === "/jingle.mp3" && (
          <h3>
            Jingle Bells Kevin MacLeod (incompetech.com) Licensed under Creative
            Commons: By Attribution 3.0 License
            http://creativecommons.org/licenses/by/3.0/
          </h3>
        )}
        {song === "/merry.mp3" && (
          <h3>
            We Wish you a Merry Christmas Kevin MacLeod (incompetech.com)
            Licensed under Creative Commons: By Attribution 3.0 License
            http://creativecommons.org/licenses/by/3.0/
          </h3>
        )}
        <h3 style={{ fontFamily: "Lobster" }}>
          Merry Christmas Generator,una magia digitale realizzata da:
        </h3>
        <img
          width={150}
          height={150}
          style={{ display: "block", margin: "0 auto" }}
          src="/logodiessetech.png"
        />
      </footer>
    </div>
  );
}
