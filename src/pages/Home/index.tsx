import React from 'react';
import logo from '../../logo.svg';
import './style.css';
import tools from '../../tools.json'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  function navigation( path: string){
    navigate(path);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Tools</h1>

          {tools.map((t) => {
            return (
              <button key={t.id} onClick={ ()=> navigation(t.path) }  >{t.name}</button>
            )
          })}

      </header>
    </div>
  );
}

export default Home;
