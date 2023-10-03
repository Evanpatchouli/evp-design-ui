import { EvpIcon, SvgIcon, ToolTip } from "@/lib";
import EvpButton from "@/lib/evp-button";
import EvpHeader from "@/lib/evp-header";
import { linkTo } from "@/lib/utils/route";

export default function Header() {
  return (
    <EvpHeader
      title={
        <span
          onClick={() => {
            linkTo("/", true);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          Evp Design UI
        </span>
      }
      icon={
        <>
          <EvpIcon evp />
        </>
      }
      rightContent={
        <>
          <ToolTip content="Components" position="left">
            <EvpButton theme="text" link="/general" hash>
              <SvgIcon.Component color={"rgb(140, 140, 255)"} />
            </EvpButton>
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
