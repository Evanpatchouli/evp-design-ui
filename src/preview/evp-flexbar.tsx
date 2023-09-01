import Card from "@/components/card";
import Code from "@/components/code";
import Md from "@/components/md";
import EvpFlexbar from "@/lib/evp-flexbar";
import EvpRow from "@/lib/evp-row";

export default function FlexbarView() {



  return(
    <div className="preview-container">
<Md>
{`
# EvpFlexbar

A flexible bar triggered by hovering or clicking, which is often displayed at the side of a container.

## Basic Usage

**import:**
`}
</Md>
<Code lang="tsx">
{`
import { EvpFlexbar } from 'evp-design-ui';
`}
</Code>
<Md>
{`
**usage:**
`}
</Md>
<Code lang="tsx">
{`
<EvpFlexbar labelPosition="right">
  <div>This is one something.</div>
</EvpFlexbar>
`}
</Code>
<Md>
{`
## LabelPosition

The label position can be set to 'left', 'right', 'top' or 'bottom'. Exactly, it decides the direction of flexbar.
`}
</Md>
      <Card style={{
        position: 'relative',
        height: 200
      }}>
        <EvpFlexbar labelPosition="right" label="right">
          <div>这是往右方向的伸缩条</div>
        </EvpFlexbar>
        <EvpFlexbar labelPosition="left" label="left">
          <div>这是往左方向的伸缩条</div>
        </EvpFlexbar>
        <EvpRow style={{ position: 'relative', paddingTop: 22 }}>
          <EvpFlexbar labelPosition="top" label="top" style={{ position: 'absolute' }}>
            <div>这是竖向顶部的伸缩条</div>
          </EvpFlexbar>
          <EvpFlexbar labelPosition="bottom" label="bot" style={{ position: 'absolute', left: 60 }}>
            <div>这是竖向底部的伸缩条</div>
          </EvpFlexbar>
        </EvpRow>
      </Card>
    </div>
  )
}