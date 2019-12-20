import React from "react";
import SnowStorm from "react-snowstorm";

import "./styles.css";

export default class MCGApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      song: "L21lcnJ5Lm1wMw==",
      message: "",
      merryc: "",
      ok: "Qui apparirà il link al biglietto di auguri natalizi"
    };
  }

  onChange = e => {
    const value = e.target.value;
    const b64 = new Buffer(value).toString("base64");
    this.setState({ [e.target.id]: b64 });
  };

  createUrl = () => {
    const url = process.env.REACT_APP_MCGAPP_URL;
    const name = this.state.name;
    const song = this.state.song;
    const message = this.state.message;
    const merry =
      url + "auguri?name=" + name + "&song=" + song + "&message=" + message;
    this.setState({
      ok: "Ecco il link del biglietto,copialo e invialo alla persona desiderata"
    });
    this.setState({ merryc: merry });
  };

  render() {
    return (
      <div className="App">
        <SnowStorm flakesMaxActive={100} flakesMax={350} />
        <h1
          style={{
            fontFamily: "Raleway",
            display: "block",
            margin: "0 auto",
            fontSize: "1.9rem"
          }}
        >
          A chi vuoi mandare gli auguri?
        </h1>
        <input
          onChange={this.onChange}
          id="name"
          style={{
            height: "30px",
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
        <h1
          style={{
            fontFamily: "Raleway",
            display: "block",
            margin: "0 auto",
            fontSize: "1.9rem"
          }}
        >
          Con quale canzone vuoi fare gli auguri
        </h1>
        <select
          onChange={this.onChange}
          id="song"
          style={{
            height: "40px",
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
          <option value="/merry.mp3">We wish you a merry christmas</option>
          <option value="/jingle.mp3">Jingle Bells</option>
        </select>
        <h1
          style={{
            fontFamily: "Raleway",
            display: "block",
            margin: "0 auto",
            fontSize: "1.9rem"
          }}
        >
          Vuoi lasciare un messaggio speciale?
        </h1>
        <input
          onChange={this.onChange}
          id="message"
          style={{
            height: "30px",
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
          onClick={this.createUrl}
          style={{
            height: "50px",
            width: "80%",
            marginTop: "40px",
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
        <h1
          style={{
            fontFamily: "Raleway",
            display: "block",
            margin: "0 auto",
            fontSize: "1.5rem"
          }}
        >
          {this.state.ok}
        </h1>
        <input
          onChange={this.onChange}
          id="name"
          value={this.state.merryc}
          style={{
            height: "2.3rem",
            width: "80%",
            borderRadius: "30px",
            border: "solid 5px blue",
            textAlign: "center",
            fontSize: "1.2rem",
            fontFamily: "Raleway",
            display: "block",
            margin: "auto"
          }}
        />
        <footer
          style={{
            backgroundColor: "lightgrey",
            width: "100%",
            marginTop: "auto"
          }}
        >
          <h3 style={{ fontFamily: "Lobster", fontSize: "1.6rem" }}>
            Merry Christmas Generator,una magia digitale realizzata da:
          </h3>
          <img
            width={200}
            height={200}
            style={{ display: "block", margin: "0 auto" }}
            src="/logodiessetech.png"
          />
        </footer>
      </div>
    );
  }
}
