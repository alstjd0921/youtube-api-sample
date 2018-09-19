import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={eventObject => console.log(eventObject.target.value)}/>;
    }
}

export default SearchBar;
