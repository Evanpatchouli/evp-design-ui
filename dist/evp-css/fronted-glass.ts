import { CommonCSS, FrostedGlassOptions } from "./typing";
import { bindFC } from "../utils/index";

const FrostedGlass_default = {
  background: `rgba(255, 255, 255, 0.1)`,
  backdropFilter: `blur(10px)`,
  WebkitBackdropFilter: `blur(10px)`,
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  borderWidth: `1px`,
  borderStyle: "solid",
  borderColor: "rgba(255, 255, 255, 0.2)",
};

let FrostedGlassFC = (
  options: FrostedGlassOptions = {
    background: `rgba(255, 255, 255, 0.1)`,
    filterBlur: 10,
    radius: 0,
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.2)",
  }
): Omit<CommonCSS, "className" | "id"> => {
  return {
    style: {
      background: options.background,
      backdropFilter: `blur(${options.filterBlur}px)`,
      WebkitBackdropFilter: `blur(${options.radius}px)`,
      borderRadius: `${options.radius}px`,
      border: options.border,
      borderStyle: options.borderStyle,
      borderWidth: options.borderWidth,
      borderColor: options.borderColor,
    },
  };
};

// : {
//   (): Omit<CommonCSS, "className" | "id">;
// } & typeof FrostedGlass_default
const FrostedGlass = bindFC(FrostedGlass_default, FrostedGlassFC);

export default FrostedGlass;
