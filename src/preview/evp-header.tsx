import EvpButton from "@/lib/evp-button";
import EvpHeader from "@/lib/evp-header";
import { useState } from "react";

export default function HeaderView() {
  const [header, setHeader] = useState(false);
  return(
    <div className="preview-container HeaderView">
      <EvpButton theme='dark' $click={()=> setHeader(!header)} >show / hidden header</EvpButton>
      { header? <EvpHeader title="Evp Design UI"></EvpHeader> : void 0 }
    </div>
  )
}