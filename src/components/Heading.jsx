import React from 'react';

function Heading() {
  const fName = 'firdaus';
  const lName = 'helmy';
  const currentHour = new Date().getHours();
  let greetingMessage = '';
  const headingColor = {
    color: ""
  };

  if (currentHour < 12) {
    greetingMessage = 'Good Morning';
    headingColor.color = 'red';
  } if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = 'Good Afternoon';
    headingColor.color = 'green';
  } if (currentHour >= 18 && currentHour < 24) {
    greetingMessage = 'Good Afternoon';
    headingColor.color = 'blue';
  }
  return (
    <h1 className='heading' style={headingColor}>
      {greetingMessage}
      {` ${fName} ${lName} !`}
    </h1>
  )
}

export default Heading;
