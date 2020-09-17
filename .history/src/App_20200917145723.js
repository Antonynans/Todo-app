import React from 'react';
import MyApp from './Practice';
import ItemTask from './Itemtask';

function App() {
  return (
    <div>
       <ItemTask
       Question: what is your name./>
       <ItemTask />
       <ItemTask />
      <MyApp />
      <ItemTask />
    </div>
  );
}

export default App;
