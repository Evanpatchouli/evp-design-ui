import Md from "@/components/md"
import SvgIcons from "../lib/evp-icon/svg.icons"
import EvpMenu from "../lib/evp-menu"
import EvpMenuItem from "../lib/evp-menu-item"
import EvpRow from "../lib/evp-row"
import Tsx from "@/components/tsx"
import Card from "@/components/card"

export default function MenuView() {
  return(
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
      <EvpMenu title="Main Menu">
        <EvpMenuItem icon='user'>User Space</EvpMenuItem>
        <EvpMenuItem icon='user'>User Space</EvpMenuItem>
        <EvpMenuItem icon='user'>User Space</EvpMenuItem>
      </EvpMenu>
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
      <Card>
        <EvpMenu title={
          <EvpRow>
            <SvgIcons.All radius={18} pd={[0,20,0,0]}/>
            <h4>Main Menu</h4>
          </EvpRow>
        }
        mg={[0,0,0,0]}
        class="woc"
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
      </Card>
    </div>
  )
}