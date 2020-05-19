import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import M from 'materialize-css'; // Materialize JS ~ https://www.youtube.com/watch?v=EboLM8OjlP4
import { onIncrement } from '../redux/actions/actionsExample';

export class Home extends React.Component {
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
       M.Collapsible.init(elems, {});
    });
  }

  onClick =()=>{
    this.props.onIncrement()
  }

  render() {
    return (
      <div>
      <div className="container">
        <div>
        <h1> Count: { this.props.count.count } </h1>
        <button className="btn waves-effect waves-light" type="submit" name="action" id='submit' onClick={ this.onClick }> increment </button>
        
        </div>

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

// Connecting to the store using connect

const mapStateToProps =(state)=>({
    count: state.counter,
});

const mapDispatchToProps =(dispatch)=>({
    onIncrement: ()=>dispatch(onIncrement( { incrementBy: 1 } )),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// For more information: https://react-redux.js.org/introduction/quick-start
