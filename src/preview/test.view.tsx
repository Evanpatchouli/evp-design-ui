import EvpButton from "@/lib/evp-button";
import EvpMsg from "@/lib/evp-msg";
import './test.css'

export default function TestViewView() {
  const $click = () => {
    EvpMsg.info("this is a message");
  }
  return(
    <div>
      <EvpButton $click={$click} children="popver message" />
    </div>
  )
}