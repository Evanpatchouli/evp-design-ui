import Md from "@/components/md"
import { Color } from "../lib/constant"
import EvpCol from "../lib/evp-col"
import EvpRow from "../lib/evp-row"
import Card from "@/components/card"
import Tsx from "@/components/tsx"
import EvpButton from "@/lib/evp-button"
import { useEffect } from "react"

export default function ColorView() {
  useEffect(()=>{
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
  }, [])
  
  return(
    <div className="preview-container">
<Md>
{`
# Color

Evp Design UI provides a series of basic colors with 7 level degrees.

The level sequence is : Dark > Deep > Heavy > [Normal] > Light > Shallow > Pale

## Examples
`}
</Md>
      <Card>
        <EvpRow style={{margin: '12px 0 12px 0'}} w={400}>
          <EvpCol w="120px" style={{alignItems: 'flex-end', paddingRight: '12px'}}>
            <div>Red Series: </div>
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DarkRed, color: 'white', minWidth: '100px', padding: '12px'}}>
            DarkRed
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DeepRed, color: 'white', minWidth: '100px', padding: '12px'}}>
            DeepRed
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.HeavyRed, color: 'white', minWidth: '100px', padding: '12px'}}>
            HeavyRed
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.Red, color: 'white', minWidth: '100px', padding: '12px'}}>
            Red
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.LightRed, color: 'white', minWidth: '100px', padding: '12px'}}>
            LightRed
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.ShallowRed, color: 'white', minWidth: '100px', padding: '12px'}}>
            ShallowRed
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.PaleRed, color: 'white', minWidth: '100px', padding: '12px'}}>
            PaleRed
          </EvpCol>
        </EvpRow>
        <EvpRow style={{margin: '12px 0 12px 0'}} w={400}>
          <EvpCol w="120px" style={{alignItems: 'flex-end', paddingRight: '12px'}}>
            <div>Yellow Series: </div>
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DarkYellow, color: 'black', minWidth: '100px', padding: '12px'}}>
            DarkYellow
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DeepYellow, color: 'black', minWidth: '100px', padding: '12px'}}>
            DeepYellow
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.HeavyYellow, color: 'black', minWidth: '100px', padding: '12px'}}>
            HeavyYellow
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.Yellow, color: 'black', minWidth: '100px', padding: '12px'}}>
            Yellow
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.LightYellow, color: 'black', minWidth: '100px', padding: '12px'}}>
            LightYellow
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.ShallowYellow, color: 'black', minWidth: '100px', padding: '12px'}}>
            ShallowYellow
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.PaleYellow, color: 'black', minWidth: '100px', padding: '12px'}}>
            PaleYellow
          </EvpCol>
        </EvpRow>
        <EvpRow style={{margin: '12px 0 12px 0'}} w={400}>
          <EvpCol w="120px" style={{alignItems: 'flex-end', paddingRight: '12px'}}>
            <div>Green Series: </div>
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DarkGreen, color: 'white', minWidth: '100px', padding: '12px'}}>
            DarkGreen
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DeepGreen, color: 'white', minWidth: '100px', padding: '12px'}}>
            DeepGreen
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.HeavyGreen, color: 'white', minWidth: '100px', padding: '12px'}}>
            HeavyGreen
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.Green, color: 'white', minWidth: '100px', padding: '12px'}}>
            Green
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.LightGreen, color: 'white', minWidth: '100px', padding: '12px'}}>
            LightGreen
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.ShallowGreen, color: 'white', minWidth: '100px', padding: '12px'}}>
            ShallowGreen
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.PaleGreen, color: 'white', minWidth: '100px', padding: '12px'}}>
            PaleGreen
          </EvpCol>
        </EvpRow>
        <EvpRow style={{margin: '12px 0 12px 0'}} w={400}>
          <EvpCol w="120px" style={{alignItems: 'flex-end', paddingRight: '12px'}}>
            <div>Blue Series: </div>
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DarkBlue, color: 'white', minWidth: '100px', padding: '12px'}}>
            DarkBlue
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DeepBlue, color: 'white', minWidth: '100px', padding: '12px'}}>
            DeepBlue
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.HeavyBlue, color: 'white', minWidth: '100px', padding: '12px'}}>
            HeavyBlue
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.Blue, color: 'white', minWidth: '100px', padding: '12px'}}>
            Blue
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.LightBlue, color: 'white', minWidth: '100px', padding: '12px'}}>
            LightBlue
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.ShallowBlue, color: 'white', minWidth: '100px', padding: '12px'}}>
            ShallowBlue
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.PaleBlue, color: 'white', minWidth: '100px', padding: '12px'}}>
            PaleBlue
          </EvpCol>
        </EvpRow>
        <EvpRow style={{margin: '12px 0 12px 0'}} w={400}>
          <EvpCol w="120px" style={{alignItems: 'flex-end', paddingRight: '12px'}}>
            <div>Gray Series: </div>
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DarkGray, color: 'white', minWidth: '100px', padding: '12px'}}>
            DarkGray
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.DeepGray, color: 'white', minWidth: '100px', padding: '12px'}}>
            DeepGray
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.HeavyGray, color: 'white', minWidth: '100px', padding: '12px'}}>
            HeavyGray
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.Gray, color: 'white', minWidth: '100px', padding: '12px'}}>
            Gray
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.LightGray, color: 'white', minWidth: '100px', padding: '12px'}}>
            LightGray
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.ShallowGray, color: 'white', minWidth: '100px', padding: '12px'}}>
            ShallowGray
          </EvpCol>
          <EvpCol style={{backgroundColor: Color.PaleGray, color: 'white', minWidth: '100px', padding: '12px'}}>
            PaleGray
          </EvpCol>
        </EvpRow>
      </Card>
<Md>
{`
## Basic Usage

**import:**
`}
</Md>
<Tsx>
{`
import { Color } from 'evp-design-ui'
`}
</Tsx>
<Md>
{`
**usage:**
`}
</Md>
<Tsx>
{`
<div
style={{
  backgroundColor: Color.Red
}}
>
</div>
`}
</Tsx>
<Md>
{`
Besides basic leveled colors, there are alse several special colors provided.
`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-card" text="★ Next Doc EvpCard >" />
    </div>
  )
}