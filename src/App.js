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
      let res = [];
      const e = document.documentElement;
      const g = document.body;
      const x = window.innerWidth || e.clientWidth || g.clientWidth;
      const y = window.innerHeight|| e.clientHeight|| g.clientHeight;
      const dancers = x * y / 120000;
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
        <VideoPlayer setBassDropped={() => this.setState({ bassDropped: true })}/>
        { this.getDancers() }
      </Fragment>
    );
  }
}

export default App;
