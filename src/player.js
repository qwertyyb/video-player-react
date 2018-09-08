import React from 'react';
import BasePlayer from './BasePlayer';
import FlvPlayer from './FlvPlayer';

export default (props) => {
  let Player = BasePlayer
  if(props.src.endsWith('.flv')) {
    Player = FlvPlayer
  }
  return (
    <Player {...props} />
  )
}