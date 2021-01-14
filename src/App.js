import React from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';
import GifList from './Components/GifList';

class App extends React.Component {

  state = { gif: [] }
  onSearchSubmit = async (term, limit = 5,rating) => {
    const giphy = require('giphy-api-without-credentials')('dFWuvuX6BXqw2v1GVKmCVsLHPMDdxdvj');
    console.log(rating);
    giphy.search({
      q:`${term}`,
      limit:limit,
      rating:rating
    }, (err, res) => {
      console.log(limit)
      this.setState({ gif: res.data });
    })
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <GifList gifs={this.state.gif} />
      </div>
    );
  }
}

export default App;
