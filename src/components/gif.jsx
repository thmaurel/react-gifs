import React, { Component } from 'react';

class Gif extends Component {
  selectGif = () => {
    this.props.setSelectedId(this.props.id);
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} alt="" className="gif" onClick={this.selectGif}/>
    );
  }
}

export default Gif;
