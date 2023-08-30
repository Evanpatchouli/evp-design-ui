import Code from "@/components/code";
import EvpButton from "@/lib/evp-button";
import EvpToast from "@/lib/evp-toast";
import { EvpToastType } from "@/lib/evp-toast/toast";
import Md from 'react-markdown';

export default function ToastView() {
  const $toast = (content?: string, type: EvpToastType = 'info') => {
    switch (type) {
      case "info": return ()=>EvpToast.info(content);
      case "warn": return ()=>EvpToast.warn(content);
      case "error": return ()=>EvpToast.error(content);
      case "success": return ()=>EvpToast.success(content);
      default: return ()=>EvpToast.info(content);
    }
  }
  return(
    <div className="preview-container ToastView">
            <Md>
{`
# EvpToast

Show a message toast on the top of the viewport.

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
usage: \`EvpToast.<type>(<content: string>, [<keep: number>, <delay: number>])\`
`}
      </Md>
      <Code lang="typescript">
{`
EvpToast.info("info toast");
`}
      </Code>
      <Md>
{`
## Type

EvpMsg has 4 types: \`info\`, \`warn\`, \`success\` and \`error\`.
`}
      </Md>
      <div className="evp evp-base-shadow" style={{ padding: 20 }}>
        <EvpButton mgr_20 theme='info' shadow={false} $click={$toast('Here is a info toast', 'info')} text="info toast" />
        <EvpButton mgr_20 theme='warning' shadow={false} $click={$toast('Here is a warning toast', 'warn')} text="warn toast" />
        <EvpButton mgr_20 theme='success' shadow={false} $click={$toast('Here is a success toast', 'success')} text="success toast" />
        <EvpButton mgr_20 theme='danger' shadow={false} $click={$toast('Here is a error toast', 'error')} text="error toast" />
      </div>
      <Md>
{`
## Api

**EvpToast Apis:**

- info | warn | error | success : (text?:string, keep?:number, delay?:number) => void
  + text: message text
  + keep: keep the message bar for a while
    * default: 3000 (ms)
  + delay: delay time before to show the message bar
    * default: 0 (ms)
`}
      </Md>
    </div>
  )
}