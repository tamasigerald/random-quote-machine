import React from 'react';
import './index.css';
import axios from 'axios';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    let url='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    axios.get(url)
      .then(res => {
        let data = res.data.quotes
        let quoteNum = Math.floor(Math.random() * data.length)
        let randomQuote = data[quoteNum]
        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        })

        console.log(res)
      })
  }
  
  getNewQuote = () => {
    this.getQuote()
  }

  render() {
    const { quote, author } = this.state
    return (
      <div className="App">
        <h1>Random Quote Machine</h1>
        
        <div id="quote-box">
          <i className="fa fa-5x fa-quote-left"/>
          <div id="text-container"><p id="text">"{quote}"</p></div>
          <p id="author">- {author}</p>

        
          <button id="new-quote" onClick={this.getNewQuote}>New quote</button><br/>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target='_blank' title="Post this quote on twitter!">
            <i className="fa fa-twitter twitter-icon fa-3x"/>
          </a>
        </div>

          
      </div>
    )
  }º
}

export default App;
