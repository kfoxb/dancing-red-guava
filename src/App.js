import React, { Component, Fragment } from 'react';
import DancingGuava from './DancingGuava';
import VideoPlayer from './VideoPlayer';

class App extends Component {
  static getRandomCoord = () => Math.random() * 100;

  state = {
    bassDropped: false,
  }

  getDancers = () => {
    if (this.state.bassDropped) {
      setTimeout(() => this.forceUpdate(), 1000);
      let res = [];
      const e = document.documentElement;
      const g = document.body;
      const x = window.innerWidth || e.clientWidth || g.clientWidth;
      const y = window.innerHeight|| e.clientHeight|| g.clientHeight;
      // firefox seems to be a bit slower, this lowers the total dancers
      const dancerArea = navigator.userAgent.includes('Firefox') ? 240000 : 120000 
      const dancers = x * y / dancerArea;
      for (let i = 0; i < dancers; i++) {
        const x = App.getRandomCoord();
        res.push((<DancingGuava delay={x * -1}key={x} x={x} y={App.getRandomCoord()}/>))
      }
      return res;
    }
    return (
      <DancingGuava x={50} y={50}/>
    );
  }

  render() {
    return (
      <Fragment>
        <VideoPlayer
          bassDropped={this.state.bassDropped}
          setBassDropped={(bassDropped) => this.setState({ bassDropped })}
        />
        { this.getDancers() }
      </Fragment>
    );
  }
}

export default App;
