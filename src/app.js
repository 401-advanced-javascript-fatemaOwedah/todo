import React from 'react';

import ToDo from './components/todo/todo.js';
import TodoList from './components/todo/list'

import SettingsContext from '../src/contex/todo';


function App(){
  return (
    <>
      <SettingsContext>
        <ToDo />
        <div className="list-group">
          <TodoList/>
        </div>
      </SettingsContext>
    </>
  )
}

export default App;