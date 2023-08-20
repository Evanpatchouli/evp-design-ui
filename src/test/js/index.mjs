import { equal } from "assert";

const props = {
  style: {
    width: 1,
    height: 1
  }
}

let style1 = {
  width: 2,
  ...props.style
}

let style2 = {
  ...props.style,
  width: 2,
}

console.log(style1, style2);
/// { width: 1, height: 1 } { width: 2, height: 1 }

equal(style1.width, 1);

equal(style2.width, 2);

// That means the items will be overrided by the latters