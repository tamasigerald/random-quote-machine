import React from 'react';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    }
  }
  
  componentDidMount() {
    let quotesUrl = '${getQuotes}';
    fetch(quotesUrl)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ quotes: data.records});
    }).catch(err => {
      // Error
    });
  }


  

  render() {
    return (
      <div className="App">
        <h1>Random Quote Machine</h1>
        <div>
          
        </div>
      </div>
    );}
}

const appUrl = 'https://quotehttp://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1s.p.rapidapi.com/';

const getQuotes = '${appUrl}quotes';

const CardQuote = ({ quote, index}) => (
  <div id="quote-box" key={index}>
    <h2>Press the button below to generate a random quote.</h2>
    <p id="text">{quote}</p>
    <p id="author"></p>

    <button id="new-quote">New quote</button><br/>
    <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
  </div>
)

export default App;
