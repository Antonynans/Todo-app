import React from 'react';

function ItemTask(props){
    console.log(props.question)
    return(
        <div>
        <h1>Question: {props.question} </h1>
        <h1>Answer: {punchline} </h1>
        </div>
    )
};
export default ItemTask;