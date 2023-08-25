import React from 'react';
import Home from './pages/Home';
import Tictactoe from './pages/Tictactoe';
import Todos from './pages/Todos';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='' Component={Home} />
      <Route path='/tictactoe' Component={Tictactoe} />
      <Route path='/todos' Component={Todos} />
    </Routes>
  );

}

export default App;
