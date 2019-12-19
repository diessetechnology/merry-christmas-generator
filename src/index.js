import React from "react";
import ReactDOM from "react-dom";
import SnowStorm from "react-snowstorm";
import diessetechlogo from "../public/logodiessetech.png";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SnowStorm flakesMaxActive={100} flakesMax={350} />
      <h1 style={{ fontFamily: "Raleway", display: "block", margin: "0 auto" }}>
        A chi vuoi mandare gli auguri?
      </h1>
      <input
        style={{
          height: "2.3rem",
          width: "80%",
          borderRadius: "30px",
          border: "solid 5px blue",
          textAlign: "center",
          fontSize: "1.2rem",
          fontFamily: "Lobster",
          display: "block",
          margin: "auto"
        }}
      />
      <h1 style={{ fontFamily: "Raleway", display: "block", margin: "0 auto" }}>
        Con quale canzone vuoi fare gli auguri
      </h1>
      <select
        style={{
          height: "2.5rem",
          width: "80%",
          borderRadius: "30px",
          border: "solid 5px blue",
          textAlign: "center",
          fontSize: "1.2rem",
          fontFamily: "Lobster",
          display: "block",
          margin: "auto"
        }}
      >
        <option value="merry">We wish you a merry christmas</option>
        <option value="jingle">Jingle Bells</option>
      </select>
      <h1 style={{ fontFamily: "Raleway", display: "block", margin: "0 auto" }}>
        Vuoi lasciare un messaggio speciale?
      </h1>
      <input
        style={{
          height: "2.3rem",
          width: "80%",
          borderRadius: "30px",
          border: "solid 5px blue",
          textAlign: "center",
          fontSize: "1.2rem",
          fontFamily: "Lobster",
          display: "block",
          margin: "auto"
        }}
      />
      <button
        style={{
          height: "2.3rem",
          width: "80%",
          marginTop: "15px",
          borderRadius: "30px",
          border: "solid 5px blue",
          backgroundColor: "gold",
          textAlign: "center",
          fontSize: "1.2rem",
          fontFamily: "Lobster",
          display: "block",
          margin: "auto"
        }}
      >
        Genera messaggio natalizio
      </button>
      <footer
        style={{
          backgroundColor: "lightgrey",
          width: "100%",
          marginTop: "auto"
        }}
      >
        <h3>Merry Christmas Generator,una magia digitale realizzata da:</h3>
        <img
          width={200}
          height={200}
          style={{ display: "block", margin: "0 auto" }}
          src={diessetechlogo}
        />
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
