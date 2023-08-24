import EvpButton from "@/lib/evp-button";
import EvpMsg from "@/lib/evp-msg";
import './test.css'

export default function TestViewView() {
  const $click = (type: "info"|"warn"|"error"|"success") => {
    switch (type) {
      case "info": return ()=>EvpMsg.info("info message");
      case "warn": return ()=>EvpMsg.warn("warn message");
      case "error": return ()=>EvpMsg.error("error message");
      case "success": return ()=>EvpMsg.success("success message");
      default: return ()=>EvpMsg.info("info message");
    }
  }
  return(
    <div className="Test">
      <div>
        <EvpButton theme='info' shadow={false} $click={$click('info')} children="info message" />
        <EvpButton theme='warning' shadow={false} $click={$click('warn')} children="warn message" />
        <EvpButton theme='danger' shadow={false} $click={$click('error')} children="error message" />
        <EvpButton theme='success' shadow={false} $click={$click('success')} children="success message" />
      </div>
    </div>
  )
}