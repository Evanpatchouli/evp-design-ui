import EvpButton from "@/lib/evp-button";
import EvpHeader from "@/lib/evp-header";
import EvpPopover from "@/lib/evp-popover";
import { useState } from "react";

export default function PopoverView() {
  return(
    <div className="preview-container">
      <EvpPopover content={"i am a popover"}>
        <EvpButton theme='dark'>show / hidden popover</EvpButton>
      </EvpPopover>
    </div>
  )
}