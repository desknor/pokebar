import React, { Fragment } from 'react';
import { render } from 'react-dom';


class LocationChoice extends React.Component {
  render() {
    return (
      <Fragment>
        <form className="location-choice">
          <h2>Please Enter A Location</h2>
          <input type="text" required placeholder="Location Choice"></input>
          <button type ="submit">Visit Location -></button>
        </form>
      </Fragment>
    )
  }
}

export default LocationChoice;