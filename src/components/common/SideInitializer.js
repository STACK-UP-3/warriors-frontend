import React, { Component } from 'react';
import M from 'materialize-css';

export class SideInitializer extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return null;
  }
}

export default SideInitializer;
