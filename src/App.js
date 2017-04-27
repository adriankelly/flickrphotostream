import React, { Component } from 'react';
import PhotoCardSet from './components/PhotoCardSet';
import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <h1>Flickr Photo Stream</h1>
        <PhotoCardSet />
      </Grid>
    );
  }
}

export default App;
