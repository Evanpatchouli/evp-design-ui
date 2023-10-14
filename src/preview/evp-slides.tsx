import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/slides/example";
import Items from "./demos/slides/items";
import ShowScroll from "./demos/slides/showScroll";
import ShowTabSpots from "./demos/slides/showTabSpots";
import TabSpotColor from "./demos/slides/tabSpotColor";
import SlidesApi from "./apis/slides";
import AdjacentTabScaled from "./demos/slides/adjacentTabScaled";

export default function SlidesView() {
  const next = { route: "", name: "" };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="preview-container">
      <Md>
        {`
# Slides

Slides is a component that can be used to display a series of items in a carousel.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Slides } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**example:**
`}
      </Md>
      <Example />
      <Md>
        {`
## Examples

Here are some examples about Slides.

`}
      </Md>
      <Md>
        {`
### items

In first example, we set the \`items\` props, and the component will use the children as items.

We can also use the children to pass items.
`}
      </Md>
      <Items />
      <Md>
        {`
### showScroll

In this example, we set the \`showScroll\` props, and the component will show the scroll-x bar at bottom.

`}
      </Md>
      <ShowScroll />
      <Md>
        {`
### showTabSpots

Besides of scroll-x bar, we can also decide whether to show the tab spots by the bottom.
`}
      </Md>
      <ShowTabSpots />
      <Md>
        {`
### tabSpotColor

Default the tabSpot color is set to series to dark. You can change the color by \`tabSpotColor\` props.
`}
      </Md>
      <TabSpotColor />
      <Md>
        {`
### adjacentTabScaled

If you want to scale a bit large the adjacent tab spots to the active current tab spot, you can set the \`adjacentTabScaled\` props to true.

`}
      </Md>
      <AdjacentTabScaled />
      <Md>
        {`
## Api

★ based on div  
★ props extends Div

**Slides Apis:**

`}
      </Md>
      <SlidesApi />
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link={`/${next.route ? `components/${next.route}` : ""}`}
        text={`★ Next Doc Evp${next.name} >`}
      />
    </div>
  );
}
