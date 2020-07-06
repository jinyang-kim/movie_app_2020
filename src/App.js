import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    // this.setState({count: this.state.count + 1});
    this.setState(current => ({
      count: current.count + 1
    }));
    console.log('add');
  }

  minus = () => {
    // this.setState({count: this.state.count - 1});
    this.setState(current => ({
      count: current.count - 1
    }));
    console.log('minus');
  }

  render() {
    // return <h1>The number is: {this.state.count}</h1>;
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;