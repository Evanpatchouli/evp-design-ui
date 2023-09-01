import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Preview from './preview';
import ButtonView from './preview/evp-button';
import InputView from './preview/evp-input';
import { useLocation } from 'react-router-dom';

import ColorView from './preview/evp-color';
import MenuView from './preview/evp-menu';
import TestViewView from './preview/test.view';
import EvpMenu from './lib/evp-menu';
import EvpMenuItem from './lib/evp-menu-item';
import './App.css';
import './preview/index.css';
import './lib/global.css';
import ShadowView from './preview/evp-shadow';
import HeaderView from './preview/evp-header';
import Header from './components/header';
import PopoverView from './preview/evp-popover';
import ToastView from './preview/evp-toast';
import MsgView from './preview/evp-msg';
import FlexbarView from './preview/evp-flexbar';
import CardView from './preview/evp-card';

function App() {
  const location = useLocation();
  console.log('route:', location)
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        {location.pathname==='/' ? <img src={logo} className="App-logo" alt="logo" /> : null}
      </header> */}
      <div className='Main'>
        <div className='evp NavMenu'>
          <EvpMenu border='none' link={'/'} title={'Components'}>
            <EvpMenuItem link={'/test'} title={'Go Test'} />
            <EvpMenu submenu title={'Layout'}>
              <EvpMenuItem link={'/'} title={'EvpCol'} />
              <EvpMenuItem link={'/'} title={'EvpRow'} />
              <EvpMenuItem link={'/'} title={'EvpDom'} />
            </EvpMenu>
            <EvpMenuItem link={'/components/evp-shadow'} title={'EvpShadow'} />
            <EvpMenuItem link={'/components/evp-button'} title={'EvpButton'} />
            <EvpMenuItem link={'/components/evp-input'} title={'EvpInput'} />
            <EvpMenuItem link={'/components/evp-color'} title={'EvpColor'} />
            <EvpMenuItem link={'/components/evp-card'} title={'EvpCard'} />
            <EvpMenuItem link={'/components/evp-menu'} title={'EvpMenu'} />
            <EvpMenuItem link={'/components/evp-header'} title={'EvpHeader'} />
            <EvpMenuItem link={'/components/evp-msg'} title={'EvpMsg'} />
            <EvpMenuItem link={'/components/evp-toast'} title={'EvpToast'} />
            <EvpMenuItem link={'/components/evp-popver'} title={'EvpPopover'} />
            <EvpMenuItem link={'/components/evp-flexbar'} title={'EvpFlexbar'} />
          </EvpMenu>
        </div>
        <div className='Content'>
          <Routes>
            <Route path='/' key={"home"} element={<Preview/>}></Route>
            <Route path='/test' key={"test"} element={<TestViewView/>}></Route>
            <Route path='/components/evp-header' key={"button"} element={<HeaderView/>}></Route>
            <Route path='/components/evp-button' key={"button"} element={<ButtonView/>}></Route>
            <Route path='/components/evp-input' key={"input"} element={<InputView/>}></Route>
            <Route path='/components/evp-color' key={"color"} element={<ColorView/>}></Route>
            <Route path='/components/evp-card' key={"card"} element={<CardView/>}></Route>
            <Route path='/components/evp-menu' key={"menu"} element={<MenuView/>}></Route>
            <Route path='/components/evp-shadow' key={"shadow"} element={<ShadowView/>}></Route>
            <Route path='/components/evp-msg' key={"msg"} element={<MsgView/>}></Route>
            <Route path='/components/evp-toast' key={"toast"} element={<ToastView/>}></Route>
            <Route path='/components/evp-popver' key={"popver"} element={<PopoverView/>}></Route>
            <Route path='/components/evp-flexbar' key={"flexbar"} element={<FlexbarView/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
