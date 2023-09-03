import Md from "@/components/md";
import EvpButton from "../lib/evp-button";
import EvpIcon from "../lib/evp-icon";
import Card from "@/components/card";
import Code from "@/components/code";
import { useEffect } from "react";

export default function ButtonView() {
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])
  
  const alert = (e: any) => {};
  return(
    <div className="preview-container">
      <Md>
{`
# EvpButton

Button is an element to trigger something when clicked on.

## Theme

Button has total 8 different themes chooseable.
`}
      </Md>
      {/* Default */}
      <Card>
        <EvpButton mg={[8]} $click={()=>{
          alert("Click");
        }}>Default</EvpButton>
        {/* White */}
        <EvpButton mg={[8]} theme='white' $click={()=>{
          alert("Click");
        }}>White</EvpButton>
        {/* Primary */}
        <EvpButton mg={[8]} theme='primary' $click={()=>{
          alert("Click");
        }}>Primary</EvpButton>
        {/* Danger */}
        <EvpButton mg={[8]} theme='danger' $click={()=>{
          alert("Click");
        }}>Danger</EvpButton>
        {/* Warning */}
        <EvpButton mg={[8]} theme='warning' $click={()=>{
          alert("Click");
        }}>Warning</EvpButton>
        {/* Success */}
        <EvpButton mg={[8]} theme='success' $click={()=>{
          alert("Click");
        }}>Success</EvpButton>
        {/* Info */}
        <EvpButton mg={[8]} theme='info' $click={()=>{
          alert("Click");
        }}>Info</EvpButton>
        {/* Dark */}
        <EvpButton mg={[8]} theme='dark' $click={()=>{
          alert("Click");
        }}>Dark</EvpButton>
        {/* Info */}
        <EvpButton mg={[8]} theme='text' $click={()=>{
          alert("Click");
        }}>Text</EvpButton>
      </Card>
<Code lang="typescript">
{`
<EvpButton mg={[8]} $click={()=>{
  alert("Click");
}}>Default</EvpButton>

<EvpButton mg={[8]} theme='white' $click={()=>{
  alert("Click");
}}>White</EvpButton>

<EvpButton mg={[8]} theme='primary' $click={()=>{
  alert("Click");
}}>Primary</EvpButton>

<EvpButton mg={[8]} theme='danger' $click={()=>{
  alert("Click");
}}>Danger</EvpButton>

<EvpButton mg={[8]} theme='warning' $click={()=>{
  alert("Click");
}}>Warning</EvpButton>

<EvpButton mg={[8]} theme='success' $click={()=>{
  alert("Click");
}}>Success</EvpButton>

<EvpButton mg={[8]} theme='info' $click={()=>{
  alert("Click");
}}>Info</EvpButton>

<EvpButton mg={[8]} theme='dark' $click={()=>{
  alert("Click");
}}>Dark</EvpButton>

<EvpButton mg={[8]} theme='text' $click={()=>{
  alert("Click");
}}>Text</EvpButton>
`}
</Code>
<Md>
{`
## Plain Button

Button can be set to plain with common border and white background.
`}
</Md>
        {/* Primary Plain */}
        <EvpButton mg={[8]} theme='primary' plain $click={()=>{
          alert("Click");
        }}>Primary Plain</EvpButton>
        {/* Danger Plain*/}
        <EvpButton mg={[8]} theme='danger' plain $click={()=>{
          alert("Click");
        }}>Danger</EvpButton>
        {/* Success Plain */}
        <EvpButton mg={[8]} theme='success' plain $click={()=>{
          alert("Click");
        }}>Success Plain</EvpButton>
        {/* Dark Plain */}
        <EvpButton mg={[8]} theme='dark' plain $click={()=>{
          alert("Click");
        }}>Dark Plain</EvpButton>
<Code lang="typescript">
{`
<EvpButton mg={[8]} theme='primary' plain $click={()=>{
  alert("Click");
}}>Primary Plain</EvpButton>

<EvpButton mg={[8]} theme='danger' plain $click={()=>{
  alert("Click");
}}>Danger</EvpButton>

<EvpButton mg={[8]} theme='success' plain $click={()=>{
  alert("Click");
}}>Success Plain</EvpButton>

<EvpButton mg={[8]} theme='dark' plain $click={()=>{
  alert("Click");
}}>Dark Plain</EvpButton>
`}
</Code>
<Md>
{`
## Shadow

By default, all buttons will not have box-shadow. If you wanna it, you can set the shadow attribute to \`true\`.
`}
</Md>
        {/* Primary Plain Shadow */}
        <EvpButton mg={[8]} theme='primary' plain shadow $click={()=>{
          alert("Click");
        }}>Primary Plain Shadow</EvpButton>
        {/* Primary Shadow*/}
        <EvpButton mg={[8]} theme='primary' shadow $click={()=>{
          alert("Click");
        }}>Primary Shadow</EvpButton>
        {/* Success Shadow*/}
        <EvpButton mg={[8]} theme='success' shadow $click={()=>{
          alert("Click");
        }}>Success Shadow</EvpButton>
        {/* Dark Shadow */}
        <EvpButton mg={[8]} theme='dark' shadow $click={()=>{
          alert("Click");
        }}>Dark Shadow</EvpButton>
<Code lang="typescript">
{`
<EvpButton mg={[8]} theme='primary' plain shadow $click={()=>{
  alert("Click");
}}>Primary Plain noShadow</EvpButton>

<EvpButton mg={[8]} theme='primary' shadow $click={()=>{
  alert("Click");
}}>Primary Shadow</EvpButton>

<EvpButton mg={[8]} theme='success' shadow $click={()=>{
  alert("Click");
}}>Success Shadow</EvpButton>

<EvpButton mg={[8]} theme='dark' shadow $click={()=>{
  alert("Click");
}}>Dark Shadow</EvpButton>
`}
</Code>
<Md>
{`
## Size

Buttons have total 5 shapes and default is \`"middle"\`.
`}
</Md>
        {/* Default default*/}
        <EvpButton mg={[8]} onClick={()=>{
          alert("Click");
        }}>Default</EvpButton>
        {/* Default Mini*/}
        <EvpButton mg={[8]} size="mini" $click={()=>{
          alert("Click");
        }}>Mini</EvpButton>
        {/* Default Small*/}
        <EvpButton mg={[8]} size="small" $click={()=>{
          alert("Click");
        }}>Small</EvpButton>
        {/* Default Middle*/}
        <EvpButton mg={[8]} size="middle" $click={()=>{
          alert("Click");
        }}>Middle</EvpButton>
        {/* Default Large*/}
        <EvpButton mg={[8]} size="large" $click={()=>{
          alert("Click");
        }}>Large</EvpButton>
        {/* Default Huge*/}
        <EvpButton mg={[8]} size="huge" $click={()=>{
          alert("Click");
        }}>Huge</EvpButton>
<Code lang="typescript">
{`
<EvpButton mg={[8]} onClick={()=>{
  alert("Click");
}}>Default</EvpButton>

<EvpButton mg={[8]} size="mini" $click={()=>{
  alert("Click");
}}>Mini</EvpButton>

<EvpButton mg={[8]} size="small" $click={()=>{
  alert("Click");
}}>Small</EvpButton>

<EvpButton mg={[8]} size="middle" $click={()=>{
  alert("Click");
}}>Middle</EvpButton>

<EvpButton mg={[8]} size="large" $click={()=>{
  alert("Click");
}}>Large</EvpButton>

<EvpButton mg={[8]} size="huge" $click={()=>{
  alert("Click");
}}>Huge</EvpButton>
`}
</Code>
<Md>
{`
## Shape

Buttons have total 4 shapes and default is undefined with radius-mini.
`}
</Md>
        {/* Default default*/}
        <EvpButton mg={[8]} $click={()=>{
          alert("Click");
        }}>Default</EvpButton>
        {/* Default square*/}
        <EvpButton mg={[8]} shape="square" $click={()=>{
          alert("Click");
        }}>Square</EvpButton>
        {/* Default round*/}
        <EvpButton mg={[8]} shape="round" $click={()=>{
          alert("Click");
        }}>Round</EvpButton>
        {/* Default circle*/}
        <EvpButton mg={[8]} shape="circle" $click={()=>{
          alert("Click");
        }}>A</EvpButton>
        <EvpButton mg={[8]} theme="white" shape="circle" $click={()=>{
          alert("Click");
        }}><EvpIcon unknown /></EvpButton>
<Code lang="typescript">
{`
<EvpButton mg={[8]} $click={()=>{
  alert("Click");
}}>Default</EvpButton>

<EvpButton mg={[8]} shape="square" $click={()=>{
  alert("Click");
}}>Square</EvpButton>

<EvpButton mg={[8]} shape="round" $click={()=>{
  alert("Click");
}}>Round</EvpButton>

<EvpButton mg={[8]} shape="circle" $click={()=>{
  alert("Click");
}}>A</EvpButton>

<EvpButton mg={[8]} theme="white" shape="circle" $click={()=>{
  alert("Click");
}}><EvpIcon unknown /></EvpButton>
`}
</Code>
<Md>
{`
## Api

**EvpButton Apis:**
- text: The button text string
- type: The raw button type
  + default: \`"button"\`
  + options: 'button' | 'reset' | 'submit'
- theme: The button theme (mostly for color)
  + default: \`"primary"\`
  + options: 'white' | 'primary' |'success' | 'warning' | 'danger' | 'info' | 'dark' | 'text'
- plain: only border with color
  + default: false
  + options: true | false
- size: the size of button
  + default: 'middle'
  + options: 'mini' |'small' | 'middle' | 'large' | 'huge'
- shape: default is undefined, square will has 0 border-radius
  + options: 'circle' | 'round' | 'square',
- shadow: whether to show preserved box-shadow
  + default: true
  + options: true | false
`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-input" text="★ Next Doc EvpInput >" />
    </div>
  )
}