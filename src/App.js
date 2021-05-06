import React from 'react';
// import List from './components/TodoList'
import Add from './component/Add';
import List from './component/TodoList';
import Filter from './component/Filter';

function App() {
  return (
    <div className="App">
      <h1>ToDo APP</h1>
      <div className="header">
        <Add />
        <Filter />
      </div>
      <List />
    </div>
  );
}

export default App;
