import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    const { term } = this.state;

    return (
      <div>
        <input
          value={term}
          onChange={eventObject => this.setState({ term: eventObject.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
