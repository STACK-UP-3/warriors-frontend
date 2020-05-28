import React from 'react';

/**
 * Circular progress spinner
 *
 * <Function Component>
 *
 * @returns React component
 * @link https://materializecss.com/preloader.html
 */
const CircularSpinner = () => {
  return (
    <div data-test="component--spinner-circular">
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularSpinner;
