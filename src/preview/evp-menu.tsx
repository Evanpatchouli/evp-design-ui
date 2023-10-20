import Md from "@/components/md";
import SvgIcons from "../lib/evp-icon/svg.icons";
import EvpMenu from "../lib/evp-menu";
import EvpMenuItem from "../lib/evp-menu-item";
import EvpRow from "../lib/evp-row";
import Tsx from "@/components/tsx";
import Card from "@/components/card";
import { useEffect, useState } from "react";
import { EvpButton } from "evp-design-ui";
import MenuApi from "./apis/menu.api";
import ItemColor from "./demos/menu/item-color";
import MenuRef from "./demos/menu/menuRef";

export default function MenuView() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [showCode, setShowCode] = useState<{ [x: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
    return void 0;
  };
  return (
    <div className="preview-container">
      <Md>
        {`
# EvpMenu

Menu is a component that displays a list of options.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpMenu } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpMenu title="Main Menu">
  <EvpMenuItem icon='user'>User Space</EvpMenuItem>
  <EvpMenuItem icon='user'>User Space</EvpMenuItem>
  <EvpMenuItem icon='user'>User Space</EvpMenuItem>
</EvpMenu>
`}
      </Tsx>
      <Card>
        <EvpMenu title="Main Menu">
          <EvpMenuItem icon="user">User Space</EvpMenuItem>
          <EvpMenuItem icon="user">User Space</EvpMenuItem>
          <EvpMenuItem icon="user">User Space</EvpMenuItem>
        </EvpMenu>
      </Card>
      <Md>
        {`
## EvpMenuItem

EvpMenu use its children as menu options, both EvpMenu and EvpMenuItem are standard menu option item.

## Menu Title

If you want to display the title of the menu, you can assign it to the title attribute of EvpMenu.

## Menu Icon

If you want to display the icon by th left side of title, you can assign it to the icon attribute of EvpMenu.

## Submenu

If you want to display a submenu, you can set a EvpMenu as one of a menu children and assign submenu attribute to it.

## Disable some submenu or menuitem

If you want to disable some menu or menuitem, you can assign not-allowed attribute to it.
`}
      </Md>
      <Card
        toolBar={
          <>
            <EvpButton theme="text" $click={() => clickCode(1)} plain size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <EvpMenu
          title={
            <EvpRow>
              <SvgIcons.All radius={18} pd={[0, 12, 0, 0]} />
              <h4>Main Menu</h4>
            </EvpRow>
          }
          mg={[0, 0, 0, 0]}
          keyId={"MainMenu"}
        >
          <EvpMenuItem icon="user">UserIcon Item</EvpMenuItem>
          <EvpMenuItem icon="waterfalls_h">UserIcon Item</EvpMenuItem>
          <EvpMenu not-allowed submenu icon="user" title="SubMenu">
            <EvpMenuItem not-allowed icon="unknown">
              Unknown Item
            </EvpMenuItem>
            <EvpMenuItem icon="unknown">Unknown Item</EvpMenuItem>
            <EvpMenuItem icon="unknown">Unknown Item</EvpMenuItem>
          </EvpMenu>
          <EvpMenu submenu icon="user" title="SubMenu">
            <EvpMenuItem not-allowed icon="unknown">
              Not-allowed Item
            </EvpMenuItem>
            <EvpMenuItem icon="unknown">Unknown Item</EvpMenuItem>
            <EvpMenuItem icon="unknown">Unknown Item</EvpMenuItem>
          </EvpMenu>
          <EvpMenuItem icon="true_circle">UserIcon Item</EvpMenuItem>
        </EvpMenu>
      </Card>
      {showCode[1] ? (
        <Tsx>
          {`
<EvpMenu title={
  <EvpRow>
    <SvgIcons.All radius={18} pd={[0,12,0,0]}/>
    <h4>Main Menu</h4>
  </EvpRow>
}
mg={[0,0,0,0]}
>
  <EvpMenuItem icon='user'>UserIcon Item</EvpMenuItem>
  <EvpMenuItem icon='waterfalls_h'>UserIcon Item</EvpMenuItem>
  <EvpMenu not-allowed submenu icon='user' title="SubMenu">
    <EvpMenuItem not-allowed icon='unknown'>Unknown Item</EvpMenuItem>
    <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
    <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
  </EvpMenu>
  <EvpMenu submenu icon='user' title="SubMenu">
    <EvpMenuItem not-allowed icon='unknown'>Unknown Item</EvpMenuItem>
    <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
    <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
  </EvpMenu>
  <EvpMenuItem icon='true_circle'>UserIcon Item</EvpMenuItem>
</EvpMenu>
`}
        </Tsx>
      ) : (
        void 0
      )}
      <Md>
        {`
## Link

If you want to navigate to a route while clicking, you can assign to the link attribute.
`}
      </Md>
      <Card
        toolBar={
          <>
            <EvpButton theme="text" $click={() => clickCode(2)} plain size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <EvpMenu title={<span style={{ fontWeight: "bold" }}>Route Menu</span>}>
          <EvpMenuItem link="/">Home</EvpMenuItem>
          <EvpMenuItem link="/components/evp-menu">EvpMenu</EvpMenuItem>
        </EvpMenu>
      </Card>
      {showCode[2] ? (
        <Tsx>
          {`
<EvpMenu title={
  <span style={{ fontWeight: 'bold' }}>Route Menu</span>
}>
  <EvpMenuItem link='/'>Home</EvpMenuItem>
  <EvpMenuItem link='/components/evp-menu'>EvpMenu</EvpMenuItem>
</EvpMenu>
`}
        </Tsx>
      ) : (
        void 0
      )}
      <Md>
        {`
## ItemIndent

If you want to indent the menu item, you can assign to the itemIndent attribute. 

Default is no indent, if you set it to true, it will be indented at 18px. You can also set it to a valid number or string.
`}
      </Md>
      <Card
        toolBar={
          <>
            <EvpButton theme="text" $click={() => clickCode(3)} plain size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <EvpMenu title={<span style={{ fontWeight: "bold" }}>Menu ItemIndent</span>}>
          <EvpMenuItem icon="user">User</EvpMenuItem>
          <EvpMenu submenu itemIndent icon="help" title="Help">
            <EvpMenuItem icon="user">User</EvpMenuItem>
          </EvpMenu>
        </EvpMenu>
      </Card>
      {showCode[3] ? (
        <Tsx>
          {`
<EvpMenu title={
  <span style={{ fontWeight: 'bold' }}>Route Menu</span>
}>
  <EvpMenuItem icon="user">User</EvpMenuItem>
  <EvpMenu submenu itemIndent icon="help" title="Help">
    <EvpMenuItem icon="user">User</EvpMenuItem>
  </EvpMenu>
</EvpMenu>
`}
        </Tsx>
      ) : (
        void 0
      )}
      <Md>
        {`
### Customize menuitem colors

You can customize menuitem colors at different states by setting \`itemColor\` props.
`}
      </Md>
      <ItemColor />
      <Md>
        {`
### MenuRef
`}
      </Md>
      <MenuRef />
      <Md>
        {`
## Api

**EvpMenu Apis**

★ container based on EvpCol and EvpRow  
★ props extends EvpBaseProps
`}
      </Md>
      <MenuApi />
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-header"
        text="★ Next Doc EvpHeader >"
      />
    </div>
  );
}
