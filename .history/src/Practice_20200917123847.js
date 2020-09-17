import React from 'react';

function MyApp(){
    const date = new Date()
    const hours = hours.getHours()
    let timeofday;
    return(
        if (hours < 12) {
            timeofday = 'morning'
        } else if (hours <= 18) {
            timeofday = 'afternoon'
        } 
        else {
            timeofday = 'night'
        }
        <h1>What is the time?</h1>
        <p>Good </p>
    )
}
export default MyApp;