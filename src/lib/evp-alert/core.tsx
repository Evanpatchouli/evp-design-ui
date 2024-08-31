import Alert, { AlertOptions } from "./alert";
import render from "./render";

export const createAlert = () => {};

const core = {
  alert: (content?: React.ReactNode, options?: AlertOptions) => {
    render(<Alert content={content} {...options} />);
  },
};

export default core;
