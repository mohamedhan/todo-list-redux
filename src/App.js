import React from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import TaskBar from './components/TaskBar'
function App() {
  return (
    <div className="App">
      <Header />
      <TaskBar />
      <List />
    </div>
  );
}

export default App;
