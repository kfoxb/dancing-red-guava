import React, { Component } from 'react';
import DancingGuava from './DancingGuava';

class App extends Component {
  state = {
    bassDropped: false,
  }

  render() {
    if (this.state.bassDropped) {
      return (<div>Multiple Dancers</div>);
    }
    return (
      <DancingGuava x={50} y={50}/>
    );
  }
}

export default App;
