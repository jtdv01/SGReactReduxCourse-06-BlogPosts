import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Blag
        {this.props.children}
      </div>
    );
  }
}
