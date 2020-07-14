import React from 'react';
import ReactDOM from 'react-dom';

const name = "firdaus"
const luckyNumber = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>You lucky number is {luckyNumber}</p>

  </div>,
  document.getElementById('root')
);
