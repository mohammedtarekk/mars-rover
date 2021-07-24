import React from 'react';
import ReactDOM from 'react-dom';
import MoveRover from './moverover'
import Header from './header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MoveRover />
    <CalculateCommand />
  </React.StrictMode>,
  document.getElementById('root')
);