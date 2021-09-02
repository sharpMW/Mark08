import React, { useState } from "react";
import "./styles.css";

var headingText = "Emoji Dictionary";

export default function App() {
  var emojiDictionary = {
    "😀": "grinning",
    "😠": "angry",
    "🥱": "yawning",
    "😕": "Confused",
    "😈": "Mischief",
    "💩": "Poo"
  };
  var emojisWeknow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> {headingText} </h1>
      <input onChange={emojiInputHandler}></input>
      <div> Meaning: {meaning} </div>
      <h3> Emojis we know </h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}

      <footer>
        <h3> About</h3>
        <p> Enter the emoji and find out what it actually means </p>
      </footer>
    </div>
  );
}
