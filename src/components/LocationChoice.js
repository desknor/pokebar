import React, { Fragment } from 'react';
import { getFunName } from '../helper.js';
import { render } from 'react-dom';


class LocationChoice extends React.Component {
  
  myInput = React.createRef();

  goToLocation = (e) => {
    // stopping the form from submitting
    e.preventDefault();
    // retriving text from that input
    const locationName = this.myInput.current.value;
     //changing the page to menu
    this.props.history.push(`/location/${locationName}`);
  }



  render() {
    return (
      <Fragment>
        <form className="location-choice" onSubmit={this.goToLocation}>
          <h2>Please Enter A Location</h2>
          <input 
            type="text" 
            ref={this.myInput}
            required placeholder="Location Choice" 
            defaultValue={getFunName()}>
            </input>
          <button type ="submit">Visit Location -></button>
        </form>
      </Fragment>
    )
  }
}

export default LocationChoice;