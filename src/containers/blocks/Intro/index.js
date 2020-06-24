import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PageIntro extends Component {
  render() {
    return (
      <section id="page-content-heading" data-test="page-content-heading">
        <div className="row">
          <div className="col s12 m9">
            <h4 className="page-title" data-test="page-title">
              {this.props.title}
            </h4>
          </div>
          <div className="col s12 m3 right-align">
            <div className="" style={{ marginTop: '1.5rem' }}>
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

PageIntro.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageIntro;
