import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Random Quote Machine</h1>
      <div id="quote-box">
        <h2>Press the button below to generate a random quote.</h2>
        <p id="text">"Quote"</p>
        <p id="author"></p>

        <button id="new-quote">New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>

      </div>
    </div>
  );
}

export default App;
