import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoData from './Tododata';
import MyApp from './Practice';

class App extends Component {
  constructor(){
    super()
    this.state ={
      todos: TodoData
    }
  }
  render(){

    return(
    <div className="todo-list">
      {todoItems}
      <MyApp />
    </div>
    )
  }
}
  const todoItems = TodoData.map(item => <TodoItem key={item.id} item={item}/>)
    
 

export default App;
