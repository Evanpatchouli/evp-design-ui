import SvgIcons from "../lib/evp-icon/svg.icons"
import EvpMenu from "../lib/evp-menu"
import EvpMenuItem from "../lib/evp-menu-item"
import EvpRow from "../lib/evp-row"

export default function MenuView() {
  return(
    <div className="preview-container">
      <EvpMenu title={
        <EvpRow>
          <SvgIcons.All pd={[0,14,0,0]}/>
          <h4>Main Menu</h4>
        </EvpRow>
      }
      pd={[8,20,0,20]}
      mg={[0,0,0,0]}
      >
        <EvpMenuItem icon='user'>UserIcon Item</EvpMenuItem>
        <EvpMenuItem icon='waterfalls_h'>UserIcon Item</EvpMenuItem>
        <EvpMenu submenu icon='user' title="SubMenu">
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
        </EvpMenu>
        <EvpMenu submenu icon='user' title="SubMenu">
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
        </EvpMenu>
        <EvpMenuItem icon='true_circle'>UserIcon Item</EvpMenuItem>
      </EvpMenu>
    </div>
  )
}