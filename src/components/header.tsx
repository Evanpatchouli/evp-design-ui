import { EvpIcon } from "@/lib";
import EvpButton from "@/lib/evp-button";
import EvpHeader from "@/lib/evp-header";
import { linkTo } from "@/lib/utils/route";

export default function Header() {
  return(
    <EvpHeader title={
      <span 
        onClick={() => {
          linkTo("/", true);
        }}
        style={{
          cursor: 'pointer',
      }}>Evp Design UI</span>
    }
    icon={<>
      <EvpIcon evp />
    </>}
    rightContent={
      <>
        <EvpButton theme='text' link="/general" hash text="Docs" />
        <EvpButton theme='text' $click={()=> window.open("https://github.com/Evanpatchouli/evp-design-ui")} pointer text="Github" />
        <EvpButton theme='text' $click={()=> window.open("https://gitee.com/jun-laner/evp-design-ui")} pointer text="Gitee" />
      </>
    }
    ></EvpHeader>
  )
}