import Md from "@/components/md";
import EvpButton from "@/lib/evp-button";
import { useEffect } from "react";

export default function GeneralView() {
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])
  
  return(
<div className="preview-container">
<Md>
{`
# General

Many of components are based on several reusable components and their props extend a same props interface. Before getting started with evp-design-ui, firstly to learn a little about them is important and benefitial.

## Basic Components

There are three basic highly reusable components in evp-design-ui. Many components use them as a container of self or certain children nodes. They are easy-customized and you can build your own components based on them.

### EvpCol

EvpCol is a div component used to wrap any elements inside, and display them in column. EvpCol has amounts of convenient props' attributes to customize its style and functions.

### EvpRow

EvpRow is a div component used to wrap any elements inside, and display them in a row. EvpRow also has amounts of convenient props' attributes to customize its style and functions.

### EvpDom

EvpDom is also a magic div component also provides amouts of convenient props' attributes to customize its style and functions. What is different from EvpCol and EvpRow is that EvpDom is just same with a common React.div if you do not assign its attributes with new values.

Although these three components are very basic and have similar props, they are individually designed they are very useful that make you write less complex and separate codes and can be used in many situations.

## Basic Props Interface

### EvpBaseProps

Most of the components in evp-design-ui extends the same basic props' attributes, because they use one of the three basic components above as their container. So you can enjoy customizing these components in a magical way.

Notice that not every components in evp-design-ui extends EvpBaseProps, especailly some complex components.

`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-col" text="★ Next Doc EvpCol >" />
</div>
  )
}