import React from 'react';
import reactDOM from 'react-dom';

// Materialize CSS setup
import 'materialize-css/dist/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';

// custom styles
import './app.scss';

import App from './App'; // Application setup

reactDOM.render(<App />, window.document.getElementById('root'));
