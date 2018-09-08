import React from 'react'
import flvjs from 'flv.js/dist/flv.min'
import Player from './BasePlayer'

class FlvPlayer extends React.Component {
  decoder(el, src = '', options= {}) {
    const player = flvjs.createPlayer({
      type: 'flv',
      url: src
    });
    player.attachMediaElement(el)
    player.load();
  }
  render() {
    return (
      <Player decoder={this.decoder} {...this.props}/>
    );
  }
}

export default FlvPlayer
