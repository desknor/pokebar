import React from 'react';
import AddPokeForm from './AddPokeForm';
import EditPokeForm from './EditPokeForm';

class CheckOut extends React.Component {
  render() {
    return (
			<div className="checkout">
        <h2>Inventory</h2>
        {Object.keys(this.props.pokes).map(key => (
          <EditPokeForm 
            key={key}
            index={key}
            poke={this.props.pokes[key]} 
            updatePoke= {this.props.updatePoke}
          />
        ))}
          <AddPokeForm addPoke={this.props.addPoke} />
          <button onClick={this.props.loadSamplePokes}>
            Load Sample Pokes
          </button>
			</div>
    )
  }
}

export default CheckOut;