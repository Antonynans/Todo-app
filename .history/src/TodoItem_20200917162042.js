import React from 'react';

function TodoItem(props){
    return(
        <div>
        <h1>Question: {props.question} </h1>
    <h1>Answer: {props.punchline} </h1>
        </div>
    )
};
export default ItemTask;