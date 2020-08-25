import React from 'react';
import './App.css';
import Header from './components/Header';
import Order from './components/Order';
import CheckOut from './components/CheckOut';

class App extends React.Component {
  state = {
    pokes: {},
    order: {},
  };
   addPoke = poke => {
     const pokes = { ...this.state.pokes };
     pokes[`poke${Date.now()}`] = poke
     this.setState({pokes});
   };
  render() {
    return (
      <div className="poke-bar">
        <div className="menu">  
          <Header tagline="310 Wall Street"/>
        </div>
        <Order />
        <CheckOut addPoke={this.addPoke} />
      </div>
    )
  }
}

export default App;