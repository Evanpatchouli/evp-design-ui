import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
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
import GeneralView from './preview/general';
import ColView from './preview/evp-col';
import RowView from './preview/evp-row';
import DomView from './preview/evp-dom';
import DividerView from './preview/evp-divider';
import RadioView from './preview/evp-radio';
import CheckBoxView from './preview/evp-checkbox';
import SelectView from './preview/evp-select';
import FormView from './preview/evp-form';
import SliderView from './preview/evp-slider';
import TagView from './preview/evp-tag';
import ToolTipView from './preview/evp-tooltip';
import BadgeView from './preview/evp-badge';
import AnchorView from './preview/evp-anchor';
import BreadCrumbView from './preview/evp-breadcrumb';

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
          <EvpMenu border='none' link={'/'} title={'General'}>
            <EvpMenu submenu itemIndent title={'Layout'}>
              <EvpMenuItem link={'/components/evp-col'} title={'EvpCol'} />
              <EvpMenuItem link={'/components/evp-row'} title={'EvpRow'} />
              <EvpMenuItem link={'/components/evp-dom'} title={'EvpDom'} />
              <EvpMenuItem link={'/components/evp-divider'} title={'EvpDivider'} />
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
            <EvpMenuItem link={'/components/evp-popover'} title={'EvpPopover'} />
            <EvpMenuItem link={'/components/evp-flexbar'} title={'EvpFlexbar'} />
            <EvpMenuItem link={'/components/evp-radio'} title={'EvpRadio'} />
            <EvpMenuItem link={'/components/evp-checkbox'} title={'EvpCheckBox'} />
            <EvpMenuItem link={'/components/evp-select'} title={'EvpSelect'} />
            <EvpMenuItem link={'/components/evp-slider'} title={'EvpSlider'} />
            <EvpMenuItem link={'/components/evp-form'} title={'EvpForm'} />
            <EvpMenuItem link={'/components/evp-tag'} title={'EvpTag'} />
            <EvpMenuItem link={'/components/evp-tooltip'} title={'EvpToolTip'} />
            <EvpMenuItem link={'/components/evp-badge'} title={'EvpBadge'} />
            <EvpMenuItem link={'/components/evp-anchor'} title={'EvpAchor'} />
            <EvpMenuItem link={'/components/evp-breadcrumb'} title={'EvpBreadCrumb'} />
          </EvpMenu>
        </div>
        <div className='Content'>
          <Routes>
            <Route path='/' key={"home"} element={<GeneralView />}></Route>
            <Route path='/test' key={"test"} element={<TestViewView />}></Route>
            <Route path='/components/evp-col' key={"col"} element={<ColView />}></Route>
            <Route path='/components/evp-row' key={"row"} element={<RowView />}></Route>
            <Route path='/components/evp-dom' key={"dom"} element={<DomView />}></Route>
            <Route path='/components/evp-divider' key={"divider"} element={<DividerView />}></Route>
            <Route path='/components/evp-header' key={"header"} element={<HeaderView />}></Route>
            <Route path='/components/evp-button' key={"button"} element={<ButtonView />}></Route>
            <Route path='/components/evp-input' key={"input"} element={<InputView />}></Route>
            <Route path='/components/evp-color' key={"color"} element={<ColorView />}></Route>
            <Route path='/components/evp-card' key={"card"} element={<CardView />}></Route>
            <Route path='/components/evp-menu' key={"menu"} element={<MenuView />}></Route>
            <Route path='/components/evp-shadow' key={"shadow"} element={<ShadowView />}></Route>
            <Route path='/components/evp-msg' key={"msg"} element={<MsgView />}></Route>
            <Route path='/components/evp-toast' key={"toast"} element={<ToastView />}></Route>
            <Route path='/components/evp-popover' key={"popver"} element={<PopoverView />}></Route>
            <Route path='/components/evp-flexbar' key={"flexbar"} element={<FlexbarView />}></Route>
            <Route path='/components/evp-radio' key={"radio"} element={<RadioView />}></Route>
            <Route path='/components/evp-checkbox' key={"checkbox"} element={<CheckBoxView />}></Route>
            <Route path='/components/evp-select' key={"select"} element={<SelectView />}></Route>
            <Route path='/components/evp-slider' key={"slider"} element={<SliderView />}></Route>
            <Route path='/components/evp-form' key={"form"} element={<FormView />}></Route>
            <Route path='/components/evp-tag' key={"tag"} element={<TagView />}></Route>
            <Route path='/components/evp-tooltip' key={"tooltip"} element={<ToolTipView />}></Route>
            <Route path='/components/evp-badge' key={"badge"} element={<BadgeView />}></Route>
            <Route path='/components/evp-anchor' key={"anchor"} element={<AnchorView />}></Route>
            <Route path='/components/evp-breadcrumb' key={"breadcrumb"} element={<BreadCrumbView />}></Route>
          </Routes>
          <div className='foot'>
            <p>CopyRight &copy; 2023-2023 Evp Design UI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
