import React, { useState } from "react";
import axios from "axios";
import './JokeButton.css'; // Import the CSS file for styling

const JokeButton = () => {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      setError(null);
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setJoke(response.data);
    } catch (err) {
      setError("Failed to fetch the joke. Try again!");
    }
  };

  return (
    <div className="joke-container">
      <button className="joke-button" onClick={fetchJoke}>Get a Random Joke</button>
      {joke && (
        <div className="joke-text">
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      )}
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default JokeButton;
