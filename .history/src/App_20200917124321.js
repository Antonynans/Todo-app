import React from 'react';
import MyApp from './Practice';

function App() {
  const date = new Date()
    const hours = hours.getHours()
    let timeofday;
    if (hours < 12) {
        timeofday = 'morning'
    } else if (hours > 12 && hours <= 18) {
        timeofday = 'afternoon'
    } 
    else {
        timeofday = 'night'
    }
  return (
    <div>
            <h1>What is the time?</h1>
        <p>Good {timeofday}</p>
        </div>
  );
}

export default App;
