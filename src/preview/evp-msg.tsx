import Code from "@/components/code";
import EvpButton from "@/lib/evp-button";
import EvpMsg from "@/lib/evp-msg";
import Md from 'react-markdown';

export default function MsgView() {
  const $msg = (type: "info"|"warn"|"error"|"success") => {
    switch (type) {
      case "info": return ()=>EvpMsg.info("info message");
      case "warn": return ()=>EvpMsg.warn("warn message");
      case "error": return ()=>EvpMsg.error("error message");
      case "success": return ()=>EvpMsg.success("success message");
      default: return ()=>EvpMsg.info("info message");
    }
  }
  return(
    <div className="preview-container MsgView">
      <Md>
{`
# EvpMsg

Show a closeable message bar on the top of the viewport.

## Basic Usage

import: 
`}
      </Md>
      <Code lang="typescript">
{`
import { EvpMsg } from 'evp-design-ui';
`}
      </Code>
      <Md>
{`
usage: \`EvpMsg.<type>(<content: string>, [<keep: number>, <delay: number>])\`
`}
      </Md>
      <Code lang="typescript">
{`
EvpMsg.info("info message");
`}
      </Code>
      <Md>
{`
## Type

EvpMsg has 4 types: \`info\`, \`warn\`, \`success\` and \`error\`.
`}
      </Md>
      <div className="evp evp-base-shadow" style={{ padding: 20 }}>
        <EvpButton mgr_20 theme='info' shadow={false} $click={$msg('info')} children="info message" />
        <EvpButton mgr_20 theme='warning' shadow={false} $click={$msg('warn')} children="warn message" />
        <EvpButton mgr_20 theme='danger' shadow={false} $click={$msg('error')} children="error message" />
        <EvpButton mgr_20 theme='success' shadow={false} $click={$msg('success')} children="success message" />
      </div>
      <Md>
{`
## Api

**EvpMsg Apis:**

- info | warn | error | success : (text?:string, keep?:number, delay?:number) => void
  + text: message text
  + keep: keep the message bar for a while
    * default: 8000 (ms)
  + delay: delay time before to show the message bar
    * default: 0 (ms)
`}
      </Md>
    </div>
  )
}