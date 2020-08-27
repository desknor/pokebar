import React from 'react';
import { formatPrice } from '../helper';

class Poke extends React.Component {

  render() {
    const {image, name, price, desc, status} = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-poke">
        <img src={image} alt={name} />
        <h3 className="poke-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    )
  }
}

export default Poke;