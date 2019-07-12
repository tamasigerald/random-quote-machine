import React from 'react';
import './index.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      dataRoute: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    }
  }
  
  componentDidMount() {
    fetch(this.state.dataRoute)
    .then(resp => resp.json())
    .then(quotes => {
      console.log(quotes);
      this.setState({ quotes: quotes.map(this.mapPost)});
    }).catch(err => {
      // Error
    });
    
  }

  mapPost(quote){
    return {
      ID: quote.ID,
      content: quote.content,
      title: quote.title
    }
  }
  

  render() {
    return (
      <div className="App">
        <h1>Random Quote Machine</h1>
        {this.state.quotes.map((quote, id) => (
          <div id="quote-box">
          <h2>Press the button below to generate a random quote.</h2>
          <p id="text">{quote.content}</p>
          <p id="author">{quote.title}</p>
          <p id="author">{quote.ID}</p>

         
          <button id="new-quote">New quote</button><br/>
          <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
        </div>
        ))}
          
      </div>
    );}
}

export default App;
