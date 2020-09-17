import React, { Component } from 'react';

// function MyApp(){
//     const date = new Date()
//     const hours = date.getHours()
//     let timeofday;
//     if (hours < 12) {
//         timeofday = 'morning'
//     } else if (hours > 12 && hours < 17) {
//         timeofday = 'afternoon'
//     } 
//     else {
//         timeofday = 'night'
//     }
//     return(
//         <div>
//             <h1>What is the time?</h1>
//         <p>Good {timeofday}</p>
//         </div>
        
//     )
// };

class MyApp extends Component {
    render(){
        return(
            <div>
                <Header username="Antony"/>
                <Greeting />
                <App />
            </div>
        )
    }
}

class Header extends Component {
    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}
class Greeting extends Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeofday;

        if (hours < 12) {
            timeofday = "Morining"
        } else if (hours > 12 && hours < 17) {
            timeofday = "Afternoon"
        } 
        else {
            timeofday = "Night"
        }
        return(
            <p>Good {timeofday} to you, sir or madam!</p>
        )
    }
}
class App extends Component {
    constructor(){
        super()
        this.state ={
            answer: "yes"
        }
    }
    render(){
        return(
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <childcomponent>{this.state.answer}</childcomponent>
            </div>
        )
    }
}
class NewApp extends Component {
    
    render(){
        return(

        )
    }
}
export default MyApp;