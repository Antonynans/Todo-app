import React from 'react';
import MyApp from './Practice';
import ItemTask from './Itemtask';

function App() {
  return (
    <div>
       <ItemTask
       question="what is your name."
       punchline="i don't know yet"/>
       <ItemTask question="when are you coming"
       punchline="very soon"/>
       <ItemTask question="do you want me to but you something/>
      <MyApp />
      <ItemTask />
    </div>
  );
}

export default App;
