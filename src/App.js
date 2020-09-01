import React from 'react';
import './App.css';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import samplePokes from './sample-pokes';
import Poke from './components/Poke';
import base from './base';

class App extends React.Component {
  state = {
    pokes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match
    const localStorageRef = localStorage.getItem(`params.locationId`);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.locationId}/pokes`, {
      context: this,
      state: 'pokes',
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.locationId, 
      JSON.stringify(this.state.order)
    );
  }

  componenetWillUnmount() {
    base.removeBinding(this.ref);
  }

   addPoke = poke => {
     const pokes = { ...this.state.pokes };
     pokes[`poke${Date.now()}`] = poke
     this.setState({pokes});
   };

   updatePoke = (key, updatedPoke) => {
     // takes copy of current state
     const pokes = { ... this.state.pokes };
     // update the state
     pokes[key] = updatedPoke;
     // set that to state
     this.setState({ pokes });
   }

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
        <Inventory 
          addPoke={this.addPoke} 
          updatePoke={this.updatePoke}
          loadSamplePokes={this.loadSamplePokes}
          pokes={this.state.pokes}
        />
      </div>
    )
  }
}

export default App;