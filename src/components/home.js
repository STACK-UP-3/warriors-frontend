import React from 'react';
import M from 'materialize-css'; // Materialize JS ~ https://www.youtube.com/watch?v=EboLM8OjlP4

export default class Home extends React.Component {

  componentDidMount() {
    M.AutoInit();
  };

  render() {
    return (
      <div>
        <div className="row">
          <h1>BareFoot Nomad Welcomes You!!</h1>
          <a className="waves-effect waves-light btn" href="/login">Login</a>
        </div>
      </div>
    );
  };
}
