import React from "react";
import JokeButton from "./JokeButton";
import './App.css'; // Import CSS for app styling

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Random Joke Generator</h1>
      <JokeButton />
    </div>
  );
}

export default App;
