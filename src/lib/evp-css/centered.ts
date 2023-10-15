import { EvpTextAlign as TextAlign } from './../typings';
import { CommonCSS } from "./typing";
import { bindFC } from '../utils/index';

const Centred_default = {
  textAlign: "center" as TextAlign,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",
};

const CenteredFC = (): Omit<CommonCSS, "className" | "id"> => {
  return {
    style: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "middle",
    },
  };
};

const Centred = bindFC(Centred_default, CenteredFC);

export default Centred;