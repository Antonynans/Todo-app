import React from 'react';
import TodoItem from './TodoItem';
import TodoData from './Tododata';
import MyApp from './Practice';

function App() {
  const todoItems = TodoData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todoItems}
      <
    </div>
  );
}

export default App;
