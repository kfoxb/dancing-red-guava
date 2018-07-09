/* global YT */
import React, { Component } from 'react';

let ready = false;

window.onYouTubeIframeAPIReady = () => {
  ready = true;
};

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
    this.state = {
      ready,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.ready && this.state.ready) {
      this.initPlayer();
    }
  }

  pollVideoTime = () => {
    const interval = setInterval(() => {
      const time = this.player.getCurrentTime();
      if (time >= 15.5) {
        this.props.setBassDropped();
        clearInterval(interval);
      }
    }, 250);
  }

  initPlayer = () => {
    this.player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'qV0LHCHf-pE',
      playerVars: {
        autoplay: 1,
        loop: 1,
        modestbranding: 1,
        controls: 0,
        showInfo: 0,
      },
      events: {
        'onReady': this.pollVideoTime,
      }
    });
  }

  onYouTubeIframeAPIReady = () => {
    this.setState({ ready: true });
  }

  render() {
    return (<div id="player" style={{ display: 'none' }}/>);
  }
}
