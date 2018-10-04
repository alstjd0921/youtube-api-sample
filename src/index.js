import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeAPI from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAXIvFh2IvnjXnLQVnnw1UTrDJRCJIX36g';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YoutubeAPI({ key: API_KEY, term: 'skateboard' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
);
