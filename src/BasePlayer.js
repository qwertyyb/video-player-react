import React, { Component } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

class ReactVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.initPlayer();
  }
  async initPlayer() {
    const videoDom = this.videoRef.current;
    const { options, decoder, src } = this.props;
    if (decoder) {
      decoder(videoDom, src)
    }
    const player = new Plyr(videoDom, options);
    this.player = player;
    this.bindWechatEvents();
  }
  bindWechatEvents() {
    const videoDom = this.videoRef.current;
    // 处理微信事件
    const { onX5videoenterfullscreen, onX5videoexitfullscreen, ...rest } = this.props;
    videoDom.addEventListener('x5videoenterfullscreen', onX5videoenterfullscreen);
    videoDom.addEventListener('x5videoexitfullscreen', onX5videoexitfullscreen);

    Object.keys(rest).forEach(key => {
      if (!key.startsWith('on')) {
        return
      }
      this.player.on(key.substring(2), rest[key]);
    })
  }
  getVideoAttrs() {
    const { options, decoder, ...rest } = this.props;
    return Object.keys(rest).reduce((attrs, curAttr) => {
      if(curAttr.startsWith('on')) {
        return attrs;
      }
      return { ...attrs, [curAttr]: rest[curAttr] }
    }, {})
  }
  render() {
    return (
      <div className="video-container">
        <video ref={this.videoRef}
          {...this.getVideoAttrs()}
          controls
        />
      </div>
    );
  }
}

export default ReactVideoPlayer;
