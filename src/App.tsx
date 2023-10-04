// import React from 'react';
// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import ButtonView from "./preview/evp-button";
import InputView from "./preview/evp-input";
import { useLocation } from "react-router-dom";

import ColorView from "./preview/evp-color";
import MenuView from "./preview/evp-menu";
import TestViewView from "./preview/test.view";
import Menu from "./lib/evp-menu";
import MenuItem from "./lib/evp-menu-item";
import "./App.css";
import "./preview/index.css";
import "./lib/global.css";
import ShadowView from "./preview/evp-shadow";
import HeaderView from "./preview/evp-header";
import Header from "./components/header";
import PopoverView from "./preview/evp-popover";
import ToastView from "./preview/evp-toast";
import MsgView from "./preview/evp-msg";
import FlexbarView from "./preview/evp-flexbar";
import CardView from "./preview/evp-card";
import GeneralView from "./preview/general";
import ColView from "./preview/evp-col";
import RowView from "./preview/evp-row";
import DomView from "./preview/evp-dom";
import DividerView from "./preview/evp-divider";
import RadioView from "./preview/evp-radio";
import CheckBoxView from "./preview/evp-checkbox";
import SelectView from "./preview/evp-select";
import FormView from "./preview/evp-form";
import SliderView from "./preview/evp-slider";
import TagView from "./preview/evp-tag";
import ToolTipView from "./preview/evp-tooltip";
import BadgeView from "./preview/evp-badge";
import AnchorView from "./preview/evp-anchor";
import BreadCrumbView from "./preview/evp-breadcrumb";
import Preview from "./preview";
import CounterView from "./preview/evp-counter";
import DateTimePickerView from "./preview/evp-datetime-picker";
import SwitchView from "./preview/evp-switch";
import LoadingView from "./preview/evp-loading";
import LabelView from "./preview/evp-label";
import ModalView from "@/preview/evp-modal";
import DialogView from "./preview/evp-dialog";
import CodeView from "./preview/evp-code";
import DrawerView from "./preview/evp-drawer";
import Anchors from "./components/anchors";
import TableView from "./preview/evp-table";
import NotFound from "./preview/404";
import ImgView from "./preview/evp-img";
import PaginatorView from "./preview/evp-paginator";
import CalendarView from "./preview/evp-calendar";
import ProgressView from "./preview/evp-progress";
import StepView from "./preview/evp-steps";

function App() {
  const location = useLocation();
  const now = new Date().toLocaleDateString();
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        {location.pathname==='/' ? <img src={logo} className="App-logo" alt="logo" /> : null}
      </header> */}
      <div className="Main">
        <div
          className="evp NavMenu"
          style={{
            display: location.pathname === "/" || location.pathname === "/404" ? "none" : void 0,
          }}
        >
          <Menu border="none" link={"/general"} title={"General"}>
            <Menu submenu itemIndent title={"Layout"}>
              <MenuItem link={"/components/evp-col"} title={"Col"} />
              <MenuItem link={"/components/evp-row"} title={"Row"} />
              <MenuItem link={"/components/evp-dom"} title={"Dom"} />
              <MenuItem link={"/components/evp-divider"} title={"Divider"} />
            </Menu>
            <MenuItem link={"/components/evp-shadow"} title={"Shadow"} />
            <MenuItem link={"/components/evp-button"} title={"Button"} />
            <MenuItem link={"/components/evp-input"} title={"Input"} />
            <MenuItem link={"/components/evp-color"} title={"Color"} />
            <MenuItem link={"/components/evp-card"} title={"Card"} />
            <MenuItem link={"/components/evp-menu"} title={"Menu"} />
            <MenuItem link={"/components/evp-header"} title={"Header"} />
            <MenuItem link={"/components/evp-msg"} title={"Msg"} />
            <MenuItem link={"/components/evp-toast"} title={"Toast"} />
            <MenuItem link={"/components/evp-popover"} title={"Popover"} />
            <MenuItem link={"/components/evp-flexbar"} title={"Flexbar"} />
            <MenuItem link={"/components/evp-radio"} title={"Radio"} />
            <MenuItem link={"/components/evp-checkbox"} title={"CheckBox"} />
            <MenuItem link={"/components/evp-select"} title={"Select"} />
            <MenuItem link={"/components/evp-slider"} title={"Slider"} />
            <MenuItem link={"/components/evp-form"} title={"Form"} />
            <MenuItem link={"/components/evp-tag"} title={"Tag"} />
            <MenuItem link={"/components/evp-tooltip"} title={"ToolTip"} />
            <MenuItem link={"/components/evp-badge"} title={"Badge"} />
            <MenuItem link={"/components/evp-anchor"} title={"Achor"} />
            <MenuItem link={"/components/evp-breadcrumb"} title={"BreadCrumb"} />
            <MenuItem link={"/components/evp-counter"} title={"Counter"} />
            <MenuItem hidden link={"/components/evp-datetime-picker"} title={"DateTimePicker"} />
            <MenuItem link={"/components/evp-switch"} title={"Switch"} />
            <MenuItem link={"/components/evp-loading"} title={"Loading"} />
            <MenuItem link={"/components/evp-label"} title={"Label"} />
            <MenuItem link={"/components/evp-modal"} title={"Modal"} />
            <MenuItem link={"/components/evp-dialog"} title={"Dialog"} />
            <MenuItem link={"/components/evp-drawer"} title={"Drawer"} />
            <MenuItem link={"/components/evp-code"} title={"Code"} />
            <MenuItem link={"/components/evp-table"} title={"Table"} />
            <MenuItem link={"/components/evp-paginator"} title={"Paginator"} />
            <MenuItem link={"/components/evp-img"} title={"Img"} />
            <MenuItem link={"/components/evp-calendar"} title={"Calendar"} />
            <MenuItem link={"/components/evp-progress"} title={"Progress"} />
            <MenuItem link={"/components/evp-steps"} title={"Steps"} />
          </Menu>
        </div>
        <div
          className="Content"
          style={{
            marginLeft: location.pathname === "/" || location.pathname === "/404" ? "0px" : "260px",
          }}
        >
          <Routes>
            <Route path="/" key={"home"} element={<Preview />}></Route>
            <Route path="/general" key={"home"} element={<GeneralView />}></Route>
            <Route path="/test" key={"test"} element={<TestViewView />}></Route>
            <Route path="/components/evp-col" key={"col"} element={<ColView />}></Route>
            <Route path="/components/evp-row" key={"row"} element={<RowView />}></Route>
            <Route path="/components/evp-dom" key={"dom"} element={<DomView />}></Route>
            <Route path="/components/evp-divider" key={"divider"} element={<DividerView />}></Route>
            <Route path="/components/evp-header" key={"header"} element={<HeaderView />}></Route>
            <Route path="/components/evp-button" key={"button"} element={<ButtonView />}></Route>
            <Route path="/components/evp-input" key={"input"} element={<InputView />}></Route>
            <Route path="/components/evp-color" key={"color"} element={<ColorView />}></Route>
            <Route path="/components/evp-card" key={"card"} element={<CardView />}></Route>
            <Route path="/components/evp-menu" key={"menu"} element={<MenuView />}></Route>
            <Route path="/components/evp-shadow" key={"shadow"} element={<ShadowView />}></Route>
            <Route path="/components/evp-msg" key={"msg"} element={<MsgView />}></Route>
            <Route path="/components/evp-toast" key={"toast"} element={<ToastView />}></Route>
            <Route path="/components/evp-popover" key={"popver"} element={<PopoverView />}></Route>
            <Route path="/components/evp-flexbar" key={"flexbar"} element={<FlexbarView />}></Route>
            <Route path="/components/evp-radio" key={"radio"} element={<RadioView />}></Route>
            <Route path="/components/evp-checkbox" key={"checkbox"} element={<CheckBoxView />}></Route>
            <Route path="/components/evp-select" key={"select"} element={<SelectView />}></Route>
            <Route path="/components/evp-slider" key={"slider"} element={<SliderView />}></Route>
            <Route path="/components/evp-form" key={"form"} element={<FormView />}></Route>
            <Route path="/components/evp-tag" key={"tag"} element={<TagView />}></Route>
            <Route path="/components/evp-tooltip" key={"tooltip"} element={<ToolTipView />}></Route>
            <Route path="/components/evp-badge" key={"badge"} element={<BadgeView />}></Route>
            <Route path="/components/evp-anchor" key={"anchor"} element={<AnchorView />}></Route>
            <Route path="/components/evp-breadcrumb" key={"breadcrumb"} element={<BreadCrumbView />}></Route>
            <Route path="/components/evp-counter" key={"counter"} element={<CounterView />}></Route>
            <Route
              path="/components/evp-datetime-picker"
              key={"datetime-picker"}
              element={<DateTimePickerView />}
            ></Route>
            <Route path="/components/evp-switch" key={"breadcrumb"} element={<SwitchView />}></Route>
            <Route path="/components/evp-loading" key={"loading"} element={<LoadingView />}></Route>
            <Route path="/components/evp-label" key={"label"} element={<LabelView />}></Route>
            <Route path="/components/evp-modal" key={"modal"} element={<ModalView />}></Route>
            <Route path="/components/evp-dialog" key={"dialog"} element={<DialogView />}></Route>
            <Route path="/components/evp-code" key={"code"} element={<CodeView />}></Route>
            <Route path="/components/evp-drawer" key={"drawer"} element={<DrawerView />}></Route>
            <Route path="/components/evp-table" key={"table"} element={<TableView />}></Route>
            <Route
              path="/components/evp-paginator"
              key={"paginator"}
              element={<PaginatorView next={{ route: "evp-img", name: "Img" }} />}
            ></Route>
            <Route path="/components/evp-img" key={"img"} element={<ImgView />}></Route>
            <Route path="/components/evp-calendar" key={"calendar"} element={<CalendarView />} />
            <Route path="/components/evp-progress" key={"progress"} element={<ProgressView />} />
            <Route path="/components/evp-steps" key={"steps"} element={<StepView />} />
            <Route path="/404" key={"404"} element={<NotFound />}></Route>
            <Route path="*" key={"404-catch"} element={<NotFound />}></Route>
          </Routes>
          <Anchors />
          <div className="foot">
            <p>CopyRight &copy; 2023-{now} Design UI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
