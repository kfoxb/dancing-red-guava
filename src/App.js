import React, { Component } from 'react';
import './styles.css';
import './Head.css';
import { ReactComponent as Logo } from './logo.svg'

class App extends Component {
  render() {
    return (
	<div>
    <Logo />
		<div id="right-upper-arm"></div>
		<div id="right-lower-arm"></div>
		<div id="right-hand"></div>
		<div id="left-upper-arm"></div>
		<div id="left-lower-arm"></div>
		<div id="left-hand"></div>
		<div id="right-upper-leg"></div>
		<div id="right-lower-leg"></div>
		<div id="right-foot"></div>
		<div id="left-upper-leg"></div>
		<div id="left-lower-leg"></div>
		<div id="left-foot"></div>
		<div id="spine"></div>
	</div>
    );
  }
}

export default App;
