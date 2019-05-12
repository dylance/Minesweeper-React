import React, { Component } from 'react';
import { setItems } from '../actions/form';
import { connect } from 'react-redux';

class SelectSizeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      width: 0,
      bombs: 0
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      height: this.state.height,
      width: this.state.width,
      bombs: this.state.bombs
    };
    this.props.setItems(formData);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <label>Height</label>
          <input
            name="height"
            type="text"
            value={this.state.height}
            onChange={this.onChange}
            component="input"
          />
        </fieldset>
        <fieldset>
          <label>Width</label>
          <input
            name="width"
            type="text"
            value={this.state.width}
            onChange={this.onChange}
            component="input"
          />
        </fieldset>
        <fieldset>
          <label>Bombs</label>
          <input
            name="bombs"
            type="text"
            value={this.state.bombs}
            onChange={this.onChange}
            component="input"
          />
        </fieldset>
        <input type="submit"></input>
      </form>
    )
  }
}

export default connect(null, { setItems })(SelectSizeForm);
