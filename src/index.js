import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'firdaus';
const lName = 'helmy';
const newYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {fName + ' ' + lName}</p>
    <p>Copyright {newYear}</p>
    <h1>My favourite Drink</h1>
    <img src='https://i.pinimg.com/originals/c6/3d/7e/c63d7ecf7c62fd4cdd079699cfb818de.jpg' />
    <img src='https://www.ecomall.my/image/cache/data/product-32046/kopi%20ais-800x800.jpg' />
    <img src='https://www.daily-groceries.com/wp-content/uploads/2019/09/nescafe-ais-1.jpg' />
  </div>,
  document.getElementById('root')
);
