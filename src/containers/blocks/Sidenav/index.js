import React from 'react';
import M from 'materialize-css'; // Materialize JS

export default class Sidenav extends React.Component {
  componentDidMount() {
    // // https://materializecss.com/sidenav.html
    // document.addEventListener('DOMContentLoaded', function () {
    //   var elems = document.querySelectorAll('.sidenav');
    //   M.Sidenav.init(elems, {});
    // });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/office.jpg" />
              </div>
              <a href="#user">
                <img className="circle" src="images/yuna.jpg" />
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
        <a
          href="#"
          data-target="slide-out"
          className="sidenav-trigger show-on-large"
        >
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
