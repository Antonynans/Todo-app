import React from 'react';

function MyApp(){
    const date = new Date()
    const hours = hours.getHours()
    let timeofday;
    if (hours < 12) {
        timeofday = 'morning'
    } else if (hours <= 18) {
        timeofday = 'afternoon'
    } 
    else {
        timeofday = 'night'
    }
    return(
        <div>
            <h1>What is the time?</h1>
        <p>Good {timeofday}</p>
        </div>
        
    )
}
export default MyApp;