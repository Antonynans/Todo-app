import React from 'react';

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkout" />
            <p>{props.item.text}</p>
        </div>
    )
};
export default ItemTask;