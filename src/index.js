import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './home';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Welcome to Integrated Digital Platform'
    };
  }

  render() {
    return (
      <div>
        <Home name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
