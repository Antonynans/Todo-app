import React from 'react';

function ItemTask(props){
    console.log(props.q)
    return(
        <div>
        <h1>Question: {props.question} </h1>
        <h1>Answer: </h1>
        </div>
    )
};
export default ItemTask;