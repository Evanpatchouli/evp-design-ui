import EvpIcon from "@/lib/evp-icon";
import SvgIcon from "@/lib/evp-icon/svg.icons";
import ToolTip from "@/lib/evp-tooltip";
import EvpButton from "@/lib/evp-button";
import EvpHeader from "@/lib/evp-header";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <EvpHeader
      title={
        <Link className="docs-header-link" to="/">
          Evp Design UI
        </Link>
      }
      icon={
        <>
          <EvpIcon evp />
        </>
      }
      rightContent={
        <>
          <ToolTip content="Components" position="left">
            <Link to="/general" aria-label="Component documentation" className="docs-header-link icon-link">
              <SvgIcon.Component color={"rgb(140, 140, 255)"} />
            </Link>
          </ToolTip>
          <ToolTip content="Github" position="left">
            <EvpButton theme="text" $click={() => window.open("https://github.com/Evanpatchouli/evp-design-ui")}>
              <SvgIcon.Github />
            </EvpButton>
          </ToolTip>
          <ToolTip content="Gitee" position="left">
            <EvpButton theme="text" $click={() => window.open("https://gitee.com/jun-laner/evp-design-ui")}>
              <SvgIcon.Gitee fill={"red"} />
            </EvpButton>
          </ToolTip>
        </>
      }
    ></EvpHeader>
  );
}
