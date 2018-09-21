import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return <input onChange={eventObject => console.log(eventObject.target.value)} />;
    }
}

export default SearchBar;
