import React from 'react';
import logo from '../css/pokelogo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <img src={logo} alt="logo" width="58%" height="58%" padding="0%"/>
        <h1>First Capital Poke Bar</h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    )
  }
}

export default Header;