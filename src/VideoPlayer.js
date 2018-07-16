/* global YT */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { videoHeight, videoWidth } from './constants';

export default class VideoPlayer extends Component {
  static propTypes = {
    bassDropped: PropTypes.bool.isRequired,
    setBassDropped: PropTypes.func.isRequired,
    setPaused: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  componentDidUpdate(prevProps, prevState) {
    const { ready } = this.state;
    if (!prevState.ready && ready) {
      this.initPlayer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onYouTubeIframeAPIReady = () => {
    this.setState({ ready: true });
  }

  pollVideo = () => {
    this.interval = setInterval(() => {
      const { bassDropped, setBassDropped } = this.props;
      const time = this.player.getCurrentTime();
      if (time >= 15.5 && !bassDropped) {
        setBassDropped(true);
      }
    }, 250);
  }

  handleVideoStateChange = ({ data }) => {
    const { setBassDropped, setPaused } = this.props;
    if (data === 0) {
      clearInterval(this.interval);
      this.player.seekTo(0);
      setBassDropped(false);
      setPaused(true);
      this.pollVideo();
    } else if (data === 1) {
      setPaused(false);
    } else {
      setPaused(true);
    }
  }

  initPlayer = () => {
    this.player = new YT.Player('player', {
      height: videoHeight,
      width: videoWidth,
      videoId: 'qV0LHCHf-pE',
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        showInfo: 0,
        end: 29,
      },
      events: {
        onReady: this.pollVideo,
        onStateChange: this.handleVideoStateChange,
      },
    });
  }

  render() {
    return (<div id="player" />);
  }
}
