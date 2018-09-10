# video-player-react
a react video player component base on plyr, flv.js(support flv format)
## install
```
npm install video-player-react --save
```
## usage
```
import React, { Component } from 'react';
// the default player can play mp4 and flv videos
import Player from 'video-player-react';
// the BasePlayer only can play video that browser support
import BasePlayer from 'video-player-react/dist/baseplayer.min.js';  

// the FlvPlayer use flv.js decode flv format videos and only can play flv format videos
import FlvPlayer from 'video-player-react/dist/flvplayer.min.js'


const src = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';
// const src = 'https://mister-ben.github.io/videojs-flvjs/bbb.flv';
const poster = 'http://i1.go2yd.com/corpimage.php?url=V_01hq9SbYd8&source=mibrowser';

class App extends Component {
  render() {
    return <Player options={{}} src={src} poster={poster}/>
  }
}
export default App;
```
### Props
**notice: support native video attribute**
prop      |         description             | default
-------    | -----------                    | --------
options   | the plyr player's options        | {}
decoder   | only `BasePlayer` support this props you can custom your decode function and the function will receive two params with video's element and src | null


## todo
support m3u8 on desktop enveronmoent

## CHANGELOG
0.1.0 support mp4, flv