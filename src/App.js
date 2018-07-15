import React, { Component, Fragment } from 'react';
import DancingGuava from './DancingGuava';
import VideoPlayer from './VideoPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bassDropped: false,
      dancerPositions: this.generateRandomDancerPositions(),
      paused: true,
    };
  }

  static getRandomCoord = () => Math.random() * 100;

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
      return dancerPositions.map((coords) => {
        const { x, y } = coords;
        return (
          <DancingGuava
            delay={x * -1}
            key={x}
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

  generateRandomDancerPositions = () => {
    const res = [];
    const e = document.documentElement;
    const g = document.body;
    const x = window.innerWidth || e.clientWidth || g.clientWidth;
    const y = window.innerHeight || e.clientHeight || g.clientHeight;
    // firefox seems to be a bit slower, this lowers the total dancers
    const dancerArea = navigator.userAgent.includes('Firefox') ? 240000 : 120000;
    const dancers = x * y / dancerArea;
    for (let i = 0; i < dancers; i += 1) {
      res.push({ x: App.getRandomCoord(), y: App.getRandomCoord() });
    }
    return res;
  }

  render() {
    const { bassDropped } = this.state;
    return (
      <Fragment>
        <VideoPlayer
          bassDropped={bassDropped}
          setBassDropped={isDropped => this.setState({ bassDropped: isDropped })}
          setPaused={isPaused => this.setState({ paused: isPaused })}
        />
        { this.getDancers() }
      </Fragment>
    );
  }
}

export default App;
