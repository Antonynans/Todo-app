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
            
        </div>
        
    )
}
export default MyApp;