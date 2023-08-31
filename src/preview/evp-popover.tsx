import EvpButton from "@/lib/evp-button";
import EvpPopover from "@/lib/evp-popover";

export default function PopoverView() {
  return(
    <div className="preview-container PopverView">
      <EvpPopover position='right' content={"i am a popover"} trigger='click'>
        <EvpButton theme='dark'>Click me</EvpButton>
      </EvpPopover>
      <EvpPopover content={"i am a popover"} trigger='hover'>
        <EvpButton theme='dark'>Hover me</EvpButton>
      </EvpPopover>
    </div>
  )
}