import React from 'react';
import AddPokeForm from './AddPokeForm';

class CheckOut extends React.Component {
  render() {
    return (
			<div className="checkout">
        <h2>Check Out</h2>
          <AddPokeForm addPoke={this.props.addPoke}/>
			</div>
    )
  }
}

export default CheckOut;