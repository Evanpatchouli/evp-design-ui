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
import EvpMenu from './lib/evp-menu';
import EvpMenuItem from './lib/evp-menu-item';
import './App.css';
import './preview/index.css';
import './lib/global.css';

function App() {
  const location = useLocation();
  console.log('route:', location)
  return (
    <div className="App">
      {/* <header className="App-header">
        {location.pathname==='/' ? <img src={logo} className="App-logo" alt="logo" /> : null}
      </header> */}
      <div className='Main'>
        <div className='NavMenu'>
          <EvpMenu link={'/'} title={'Components'}>
            <EvpMenuItem link={'/test'} title={'Go Test'} />
            <EvpMenu submenu title={'Layout'}>
              <EvpMenuItem link={'/'} title={'EvpCol'} />
              <EvpMenuItem link={'/'} title={'EvpRow'} />
              <EvpMenuItem link={'/'} title={'EvpDom'} />
            </EvpMenu>
            <EvpMenuItem link={'/components/button'} title={'EvpButton'} />
            <EvpMenuItem link={'/components/input'} title={'EvpInput'} />
            <EvpMenuItem link={'/components/color'} title={'EvpColor'} />
            <EvpMenuItem link={'/components/menu'} title={'EvpMenu'} />
          </EvpMenu>
        </div>
        <div className='Content'>
          <Routes>
            <Route path='/' key={"home"} element={<Preview/>}></Route>
            <Route path='/test' key={"test"} element={<TestViewView/>}></Route>
            <Route path='/components/button' key={"button"} element={<ButtonView/>}></Route>
            <Route path='/components/input' key={"input"} element={<InputView/>}></Route>
            <Route path='/components/color' key={"color"} element={<ColorView/>}></Route>
            <Route path='/components/menu' key={"menu"} element={<MenuView/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
