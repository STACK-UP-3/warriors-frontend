import React from 'react';
import PropTypes from 'prop-types';
// Materialize JS ~ https://www.youtube.com/watch?v=EboLM8OjlP4
import M from 'materialize-css';

export default class Home extends React.Component {
  constructor(props) {
    super();

    this.state = {
      year: props.yearPublished,
    };
  }

  componentDidMount() {
    // https://materializecss.com/collapsible.html
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {});
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>BareFoot Nomad Welcomes You!!</h1>
          <p>Year: {this.state.year}</p>
        
          {/* Collapsible component to test if Materialize JS is working */}
          <ul className="collapsible">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>First
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">place</i>Second
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">whatshot</i>Third
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

/**
 * Define prop types for the Component
 */
Home.propTypes = {
  yearPublished: PropTypes.number,
};
