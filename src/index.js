import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'firdaus';
const lName = 'helmy';
const currentHour = new Date().getHours();

function greetingMessage() {
  if (currentHour < 12) {
    return <h1 style={{ color: 'red' }}>Good Morning {fName + ' ' + lName}</h1>
  } if (currentHour >= 12 && currentHour <= 18) {
    return <h1 style={{ color: 'green' }}>Good Afternoon {fName + ' ' + lName}</h1>
  } if (currentHour > 18 && currentHour < 24) {
    return <h1 style={{ color: 'blue' }}>Good Evening {fName + ' ' + lName}</h1>
  }
}

ReactDOM.render(
  <div>
    {greetingMessage()}
  </div>,
  document.getElementById('root')
);
