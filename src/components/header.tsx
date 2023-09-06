import { EvpIcon } from "@/lib";
import EvpButton from "@/lib/evp-button";
import EvpHeader from "@/lib/evp-header";

export default function Header() {
  return(
    <EvpHeader title="Evp Design UI"
    icon={<>
      <EvpIcon evp />
    </>}
    rightContent={
      <>
        <EvpButton theme='text' $click={()=> window.open("https://github.com/Evanpatchouli/evp-design-ui")} pointer text="Github" />
        <EvpButton theme='text' $click={()=> window.open("https://gitee.com/jun-laner/evp-design-ui")} pointer text="Gitee" />
      </>
    }
    ></EvpHeader>
  )
}