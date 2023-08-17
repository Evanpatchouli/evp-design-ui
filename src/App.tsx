import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Preview from './preview';
import ButtonView from './preview/button';
import InputView from './preview/input';
import { useLocation } from 'react-router-dom';

import './App.css';
import './preview/index.css';
import './lib/global.css';


function App() {
  const location = useLocation();
  console.log('route:', location)
  return (
    <div className="App">
      <header className="App-header">
        {location.pathname==='/' ? <img src={logo} className="App-logo" alt="logo" /> : null}
        <Routes>
          <Route path='/' key={"home"} element={<Preview/>}></Route>
          <Route path='/button' key={"button"} element={<ButtonView/>}></Route>
          <Route path='/input' key={"input"} element={<InputView/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
