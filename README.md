# warriorz-frontend

[![Build Status](https://travis-ci.com/STACK-UP-3/warriors-frontend.svg?branch=develop)](https://travis-ci.com/STACK-UP-3/warriors-frontend)
[![Maintainability](https://api.codeclimate.com/v1/badges/2be1a7a7abf84c601e9d/maintainability)](https://codeclimate.com/github/STACK-UP-3/warriors-frontend/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2be1a7a7abf84c601e9d/test_coverage)](https://codeclimate.com/github/STACK-UP-3/warriors-frontend/test_coverage)

> A project by the Warriorz team at Andela Stack-Up 3

User interface for the Barefoot Nomad app... built with React.

### Installation

Follow these steps to test this application on your computer:

- Clone the repository...
  - Using SSH ~ `git clone git@github.com:STACK-UP-3/warriors-frontend.git`
    - Using HTTPS ~ `git clone https://github.com/STACK-UP-3/warriors-frontend.git`
- Install npm packages... `npm install`
- Start the application... `npm run start:dev`

### Dependencies

This application requires the following dependencies in order to function properly:

- [React](https://reactjs.org)
- [Materialize CSS](https://materializecss.com)
- [Webpack](https://webpack.js.org)

### Docker

- Run `docker build . -t barefootnamdimage` To create an image
- Run `docker run -it -p 3000:3000  barefootnomadimage` to run the image
- In the browser go to `http://localhost:3000/`.
