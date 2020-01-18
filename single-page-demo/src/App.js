import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    timesPushed: 0,
  };

  clicked = () => {
    this.setState({
      timesPushed: this.state.timesPushed + 1
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.timesPushed}
          </p>
          <br/>
          <button onClick={this.clicked} className="button-style">
            Click me!
          </button>

        </header>
      </div>
    );
  } 
}

export default App;
