import React from 'react';
import TodoItem from './TodoItem';
import TodoData from './Tododata';

function App() {
  const todoItem = TodoData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {TodoItem}
    </div>
  );
}

export default App;
