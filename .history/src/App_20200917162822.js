import React from 'react';
import TodoItem from './TodoItem';
import TodoData from './Tododata';

function App() {
  const TodoItem = TodoData.map({item => <TodoItem key={item.id} item})
  return (
    <div>
      <TodoItem />
    </div>
  );
}

export default App;
