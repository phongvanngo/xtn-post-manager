import React, { Component } from 'react';
import PostManager from './Components/PostsManager'

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <PostManager />
        </div>
        <div className="col-2"></div>
      </div>
    )
  }
}

export default App;
