import React from 'react';

class EditPokeForm extends React.Component {
  handleChange = e => {
    const updatedPoke = {
      ... this.props.poke,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updatePoke(this.props.index, updatedPoke);
  };

  render() {
    return (
      <div className="poke-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.poke.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.poke.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.poke.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.poke.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.poke.image}
        />
      </div>
    );
  }
}

export default EditPokeForm;
