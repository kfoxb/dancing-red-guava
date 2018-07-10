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
      if (time >= 15.5 && !this.props.bassDropped) {
        this.props.setBassDropped(true);
      }
    }, 250);
  }

  handleVideoStateChange = ({ data }) => {
    if (data === 0) {
      this.player.seekTo(0);
      this.props.setBassDropped(false);
    }
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
        end: 29,
      },
      events: {
        onReady: this.pollVideoTime,
        onStateChange: this.handleVideoStateChange,
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
