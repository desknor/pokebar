import React from 'react';
import logo from '../css/pokelogo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <img src={logo} alt="logo" width="58%" height="58%" padding="0%"/>
        <h1>First Capital Poke Bar</h1>
        <h3 className="tagline">
          310 Wall Street
          <h3>Kingston, NY 12401</h3>
          <h3>(845)XXX-XXX</h3>
        </h3>
      </header>
    )
  }
}

export default Header;