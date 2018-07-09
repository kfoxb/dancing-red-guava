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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  pollVideoTime = () => {
    this.interval = setInterval(() => {
      const time = this.player.getCurrentTime();
      if (time >= 15.5) {
        this.props.setBassDropped(true);
      }
      if (time >= 29) {
        this.player.seekTo(0);
        this.props.setBassDropped(false);
      }
    }, 250);
  }

  initPlayer = () => {
    this.player = new YT.Player('player', {
      height: '100',
      width: '200',
      videoId: 'qV0LHCHf-pE',
      playerVars: {
        autoplay: 1,
        loop: 1,
        modestbranding: 1,
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
    return (<div id="player" />);
  }
}
