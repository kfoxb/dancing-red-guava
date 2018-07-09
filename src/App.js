import React, { Component, Fragment } from 'react';
import DancingGuava from './DancingGuava';
import VideoPlayer from './VideoPlayer';

class App extends Component {
  static getRandomCoord = () => Math.random() * 100;

  state = {
    bassDropped: false,
    dancers: 10,
  }

  getDancers = () => {
    if (this.state.bassDropped) {
      let res = [];
      for (let i = 0; i < this.state.dancers; i++) {
        const x = App.getRandomCoord();
        res.push((<DancingGuava key={x} x={x} y={App.getRandomCoord()}/>))
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
