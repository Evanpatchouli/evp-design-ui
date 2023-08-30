import EvpButton from "@/lib/evp-button";
import EvpHeader from "@/lib/evp-header";

export default function Header() {
  return(
    <EvpHeader title="Evp Design UI"
    icon={<>
      
    </>}
    rightContent={
      <>
        <EvpButton theme='text' pointer text="Github" />
      </>
    }
    ></EvpHeader>
  )
}