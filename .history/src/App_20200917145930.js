import React from 'react';
import MyApp from './Practice';
import ItemTask from './Itemtask';

function App() {
  return (
    <div>
       <ItemTask
       question="what is your name."
       punchline/>
       <ItemTask />
       <ItemTask />
      <MyApp />
      <ItemTask />
    </div>
  );
}

export default App;
