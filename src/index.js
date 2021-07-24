import React from 'react';
import ReactDOM from 'react-dom';
import MoveRover from './moverover'
import Header from './header'
import CalculateCommand from './CalculateCommand'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MoveRover />
    <CalculateCommand />
  </React.StrictMode>,
  document.getElementById('root')
);