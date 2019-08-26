import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedId: 'vguRpQzGag7M5h4UVt'
    }

    this.search('homer thinking')
  }

  search = (query) => {
    giphy('wQjKZBGl8m5ArBMXmFU2wWEySfDzgUwU').search({
      q:query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  setSelectedId = (id) => {
    this.setState({
        selectedId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} setSelectedId={this.setSelectedId} />
        </div>
      </div>
    )
  }
}

export default App;
