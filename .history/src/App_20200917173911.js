import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoData from './Tododata';
import MyApp from './Practice';

class App extends Component {
  render(){
    return(

    )
  }
}
function App() {
  const todoItems = TodoData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todoItems}
      <MyApp />
    </div>
  );
}

export default App;
