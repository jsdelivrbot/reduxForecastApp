import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // Take the existing function, bind it, and replace the current function
    this.onInputChange = this.onInputChange.bind(this);
    // 3. Chances are you need to bind it
  }

// All DOM event handlers (onChange, onClick)
// come along with this event object
  onInputChange(event) {
    // this event.target.value is vanilla js
    // this reference to "this"
    // requires "bind" to be called
    // otherwise, I have a strange context
    this.setState({ term: event.target.value });
    // 2. that makes a reference to "this"...
  }

  onFormSubmit(event) {
    event.preventDefault();
    // We need to fetch data here
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder = "Get a five day forecast in your favourite cities"
          className = "form-control"
          value = {this.state.term}
          // 1. If you have a callback...
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
