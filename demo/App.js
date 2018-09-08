import React, { Component } from 'react';
import Player from '../src/Player';

const src = 'http://video.yidianzixun.com/video/get-url?key=video/8f046f3a37ef4100ebeb078a5cc4ace0.mp4';
// const src = 'https://mister-ben.github.io/videojs-flvjs/bbb.flv';
const poster = 'http://i1.go2yd.com/corpimage.php?url=V_01hq9SbYd8&source=mibrowser';

class App extends Component {
  render() {
    return <Player options={{}} src={src} poster={poster}/>
  }
}

export default App;