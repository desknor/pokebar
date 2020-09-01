import React from 'react';
import {formatPrice} from '../helper';

class Order extends React.Component {
  renderOrder = (key) => {
    const poke = this.props.pokes[key];
    const count = this.props.order[key];
    const isAvailable = poke && poke.status === 'available';
    //Ensure the poke is loaded before continuing 
    if (!poke) return null;

    if (!isAvailable) {
      return <li key={key}>
        Sorry {poke ? poke.name : 'poke'} No longer available
      </li>
    }
    return ( 
      <li key={key}>
        {poke.name}
        {formatPrice(count * poke.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const poke = this.props.pokes[key];
      const count = this.props.order[key];
      const isAvailable = poke && poke.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * poke.price);
      }
      return prevTotal
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
          <div className="total">
            Total:
            <strong>{formatPrice(total)}</strong>
          </div>
      </div>
    )
  }
}

export default Order;