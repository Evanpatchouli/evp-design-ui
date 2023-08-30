import SvgIcons from "../lib/evp-icon/svg.icons"
import EvpMenu from "../lib/evp-menu"
import EvpMenuItem from "../lib/evp-menu-item"
import EvpRow from "../lib/evp-row"

export default function MenuView() {
  return(
    <div className="preview-container">
      <EvpMenu title={
        <EvpRow>
          <SvgIcons.All radius={18} pd={[0,20,0,0]}/>
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
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
          <EvpMenuItem icon='unknown'>Unknown Item</EvpMenuItem>
        </EvpMenu>
        <EvpMenuItem icon='true_circle'>UserIcon Item</EvpMenuItem>
      </EvpMenu>
    </div>
  )
}