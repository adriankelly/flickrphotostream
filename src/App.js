import React, { Component } from 'react';
import PhotoCardSet from './components/PhotoCardSet';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Flickr Photo Stream</h1>
        <PhotoCardSet />
      </div>
    );
  }
}

export default App;
