import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import github from './github.png';
import DancingGuava from './DancingGuava';
import VideoPlayer from './VideoPlayer';
import {
  dancerHeight, dancerWidth, videoHeight, videoWidth,
} from './constants';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
`;

const GithubImage = styled.img`
  max-width: ${videoWidth / 2}px;
  max-height: ${videoHeight / 2}px;
  vertical-align: bottom;
  filter: opacity(10%);
`;

const GithubLink = styled.a`
  position: fixed;
  bottom: 0;
  right: 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bassDropped: false,
      dancerPositions: this.generateRandomDancerPositions(),
      paused: true,
    };
  }

  static getRandomCoords = ({ vh, vw }, { dh, dw }) => {
    const h = ((dh / 2) + vh) * 100;
    const w = ((dw / 2) + vw) * 100;
    let x = App.getRandomPercentInRange(0);
    let y = App.getRandomPercentInRange(0);
    if (x <= w && y <= h) {
      // dancer would display over/behind video
      // move it either down or to the right
      if (Math.random() > 0.5) {
        x = App.getRandomPercentInRange(w);
      } else {
        y = App.getRandomPercentInRange(h);
      }
    }
    return { x, y };
  };

  static getRandomPercentInRange = min => Math.floor(Math.random() * (100 - min + 1)) + min

  getDancers = () => {
    const { bassDropped, dancerPositions, paused } = this.state;
    if (bassDropped) {
      setTimeout(() => {
        // eslint-disable-next-line react/destructuring-assignment
        if (!this.state.paused) {
          this.setState({
            dancerPositions: this.generateRandomDancerPositions(),
          });
        }
      }, 1000);
      return dancerPositions.map((coords, i) => {
        const { x, y } = coords;
        const key = `dancer_${i}`;
        return (
          <DancingGuava
            delay={x * -1}
            key={key}
            paused={paused}
            x={x}
            y={y}
          />
        );
      });
    }
    return (
      <DancingGuava
        paused={paused}
        x={50}
        y={50}
      />
    );
  }

  getVideoCoordinatesAsPercentage = (width, height) => ({
    vh: (videoHeight / height),
    vw: (videoWidth / width),
  })

  getDancerSizeAsPercentage = (width, height) => ({
    dh: (dancerHeight / height),
    dw: (dancerWidth / width),
  })

  generateRandomDancerPositions = () => {
    const res = [];
    const e = document.documentElement;
    const g = document.body;
    const x = window.innerWidth || e.clientWidth || g.clientWidth;
    const y = window.innerHeight || e.clientHeight || g.clientHeight;
    // firefox seems to be a bit slower, this lowers the total dancers
    const dancerArea = navigator.userAgent.includes('Firefox') ? 240000 : 120000;
    const dancers = x * y / dancerArea;
    const videoEdges = this.getVideoCoordinatesAsPercentage(x, y);
    const dancerSize = this.getDancerSizeAsPercentage(x, y);
    for (let i = 0; i < dancers; i += 1) {
      res.push(App.getRandomCoords(videoEdges, dancerSize));
    }
    return res;
  }

  render() {
    const { bassDropped, paused } = this.state;
    return (
      <Fragment>
        <FlexDiv>
          <VideoPlayer
            bassDropped={bassDropped}
            setBassDropped={isDropped => this.setState({ bassDropped: isDropped })}
            setPaused={isPaused => this.setState({ paused: isPaused })}
          />
          { paused && '<--- Press Play' }
        </FlexDiv>
        <GithubLink href="https://github.com/kfoxb/dancing-red-guava">
          <GithubImage
            alt="github logo"
            src={github}
          />
        </GithubLink>
        { this.getDancers() }
      </Fragment>
    );
  }
}

export default App;
