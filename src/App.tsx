import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Preview from './preview';
import ButtonView from './preview/button';
import InputView from './preview/input';
import { useLocation } from 'react-router-dom';

import ColorView from './preview/color';
import MenuView from './preview/menu';
import TestViewView from './preview/test.view';

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
          <Route path='/color' key={"color"} element={<ColorView/>}></Route>
          <Route path='/menu' key={"color"} element={<MenuView/>}></Route>
          <Route path='/test' key={"color"} element={<TestViewView/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
