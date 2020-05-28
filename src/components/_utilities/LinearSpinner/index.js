import React from 'react';

/**
 * Linear progress bar
 *
 * <Function Component>
 *
 * @returns React component
 * @link https://materializecss.com/preloader.html
 */
const LinearSpinner = () => {
  return (
    <div data-test="component--spinner-linear">
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default LinearSpinner;
