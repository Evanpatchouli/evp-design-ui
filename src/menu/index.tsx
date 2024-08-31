import { Menu, MenuItem } from "@/lib";
import { useMenuRef } from "@/lib/evp-menu/hooks";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function DocsMenu() {
  const menu = useMenuRef();
  const location = useLocation();

  useEffect(() => {
    menu.current?.setSelectedKeys?.([location.pathname], "select");
  }, [location.pathname, menu]);

  return (
    <Menu menuRef={menu} border="none" link={"/general"} title={"General"}>
      {/* <button
        onClick={() => {
          // console.log(menu.current);
          menu.current?.setSelectedKeys?.(["/components/evp-button"], "select");
        }}
      >
        ceshi
      </button> */}
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
      <MenuItem link={"/components/evp-anchor"} title={"Anchor"} />
      <MenuItem link={"/components/evp-breadcrumb"} title={"BreadCrumb"} />
      <MenuItem link={"/components/evp-counter"} title={"Counter"} />
      <MenuItem hidden link={"/components/evp-datetime-picker"} title={"DateTimePicker"} />
      <MenuItem link={"/components/evp-switch"} title={"Switch"} />
      <MenuItem link={"/components/evp-loading"} title={"Loading"} />
      <MenuItem link={"/components/evp-label"} title={"Label"} />
      <MenuItem link={"/components/evp-modal"} title={"Modal"} />
      <MenuItem link={"/components/evp-dialog"} title={"Dialog"} />
      <MenuItem link={"/components/evp-drawer"} title={"Drawer"} />
      <MenuItem link={"/components/evp-alert"} title={"Alert"} />
      <MenuItem link={"/components/evp-code"} title={"Code"} />
      <MenuItem link={"/components/evp-table"} title={"Table"} />
      <MenuItem link={"/components/evp-paginator"} title={"Paginator"} />
      <MenuItem link={"/components/evp-list"} title={"List"} />
      <MenuItem link={"/components/evp-img"} title={"Img"} />
      <MenuItem link={"/components/evp-calendar"} title={"Calendar"} />
      <MenuItem link={"/components/evp-progress"} title={"Progress"} />
      <MenuItem link={"/components/evp-steps"} title={"Steps"} />
      <MenuItem link={"/components/evp-required"} title={"Required"} />
      <MenuItem link={"/components/evp-waterfalls"} title={"Waterfalls"} />
      {/* <MenuItem link={"/components/evp-gallery"} title={"Gallery"} /> */}
      <MenuItem link={"/components/evp-slides"} title={"Slides"} />
      <MenuItem link={"/components/evp-title"} title={"Title"} />
      <MenuItem link={"/components/evp-rate"} title={"Rate"} />
      <MenuItem link={"/components/evp-ghost-button-group"} title={"GhostButtonGroup"} />
      {/* <MenuItem link={"/components/evp-css"} title={"Css"} />
      <MenuItem link={"/components/evp-template"} title={"Template"} /> */}
      <MenuItem link={"/components/evp-frosted-glass"} title={"FrostedGlass"} />
      <MenuItem link={"/components/evp-circle"} title={"Circle"} />
      <MenuItem link={"/components/evp-droplet"} title={"Droplet"} />
      <MenuItem link={"/components/evp-snake"} title={"Snake"} />
      <Menu submenu itemIndent title={"Animation"}>
        <MenuItem link={"/components/evp-animation"} title={"Animation"} />
        <MenuItem link={"/components/evp-animation/Bounce"} title={"Bounce"} />
        <MenuItem link={"/components/evp-animation/Twinkle"} title={"Twinkle"} />
        <MenuItem link={"/components/evp-animation/Flip"} title={"Flip"} />
        <MenuItem link={"/components/evp-animation/Shake"} title={"Shake"} />
        <MenuItem link={"/components/evp-animation/ZoomIn"} title={"ZoomIn"} />
        <MenuItem link={"/components/evp-animation/Fade"} title={"Fade"} />
        <MenuItem link={"/components/evp-animation/FadeIn"} title={"FadeIn"} />
        <MenuItem link={"/components/evp-animation/FadeOut"} title={"FadeOut"} />
      </Menu>
      <Menu submenu itemIndent title={"utils (unstable)"}>
        <MenuItem link={"/components/evp-utils"} title={"Utils"} />
      </Menu>
    </Menu>
  );
}
