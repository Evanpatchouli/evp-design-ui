import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ButtonView from './preview/button';
import './preview/index.css';
import './lib/global.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <HashRouter>
          <Routes>
          <Route path='/' element={<ButtonView/>}></Route>
            <Route path='/button' element={<ButtonView/>}></Route>
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
