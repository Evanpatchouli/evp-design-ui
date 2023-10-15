// import { Hintable, Indexable } from "../utils";

import FrostedGlass from "./fronted-glass";
import { CommonCSS } from "./typing";
import Centred from "./centered";

const Overspread = (): Omit<CommonCSS, "className" | "id"> => {
  return {
    style: {
      width: "100%",
      height: "100%",
    },
  };
};

Overspread.width = "100%";
Overspread.height = "100%";

const ShineText = (): Omit<CommonCSS, "className" | "id"> => {
  return {
    style: {
      textShadow: `
        0 0 1px #fff,
        0 0 2px #fff,
        0 0 2px #fff,
        0 0 3px #00a67c,
        0 0 4px #00a67c,
        0 0 5px #00a67c
        `,
    },
  };
};

ShineText.textShadow = `
0 0 1px #fff,
0 0 2px #fff,
0 0 2px #fff,
0 0 3px #00a67c,
0 0 4px #00a67c,
0 0 5px #00a67c
`;

// @ts-ignore
// const CSS: Indexable<Hintable<CssOptions>, (...args: any[]) => React.CSSProperties> = {
const CSS = {
  FrostedGlass: FrostedGlass,
  ShineText: ShineText,
  Centred: Centred,
  Overspread: Overspread,
};

export default CSS;
