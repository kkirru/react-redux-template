import React from 'react';
import './App.css';
import { store } from './redux.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    console.log(store.getState().color);
    this.state = { color: store.getState().color };

    // dispatch 될 때마다 실행될 함수를 store에 subscribe
    store.subscribe(this.changeColor);
  }

  dispatchColor = (color) => {
    store.dispatch({
      type: "CHANGE_COLOR",
      color
    })
  }

  changeColor = () => {
    this.setState({ color: store.getState().color });
  }

  render() {
    const { color } = this.state;
    return (
      <div>
        <div className="container" style={{ backgroundColor: color }}>
          <h1>red</h1>
          <button onClick={() => this.dispatchColor("red")}>
            red
        </button>
        </div>
        <div className="container" style={{ backgroundColor: color }}>
          <h1>green</h1>
          <button onClick={() => this.dispatchColor("green")}>
            green
        </button>
        </div>
        <div className="container" style={{ backgroundColor: color }}>
          <h1>blue</h1>
          <button onClick={() => this.dispatchColor("blue")}>
            blue
        </button>
        </div>
        <div className="container" style={{ backgroundColor: color }}>
          <h1>coral</h1>
          <button onClick={() => this.dispatchColor("coral")}>
            coral
        </button>
        </div>
      </div>
    );
  }
}

export default App;
