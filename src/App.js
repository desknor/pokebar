import React from 'react';
import './App.css';
import Header from './components/Header';
import Order from './components/Order';
import CheckOut from './components/CheckOut';
import samplePokes from './sample-pokes';
import Poke from './components/Poke';

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

   loadSamplePokes = () => {
     this.setState({ pokes: samplePokes});
   };

   addToOrder = key => {
     //copying of state state
     const order = { ...this.state.order };
     // add to the order or update number in order
     order[key] = order[key] + 1 || 1;
     // calling setState to update state object
     this.setState({ order });
   }

   //Poke.js componenet in UL

  render() {
    return (
      <div className="poke-bar">
        <div className="menu">  
          <Header tagline="310 Wall Street" />
          <ul className="pokes">
           {Object.keys(this.state.pokes).map(key => ( 
             <Poke 
              key={key}
              index={key}
              details={this.state.pokes[key]} 
              addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order pokes={this.state.pokes} order={this.state.order} />
        <CheckOut addPoke={this.addPoke} loadSamplePokes={this.loadSamplePokes}/>
      </div>
    )
  }
}

export default App;