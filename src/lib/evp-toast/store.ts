const storage = new Map();

const state = {
  toasts: [] as { id: any; dom: JSX.Element | React.ReactNode }[],
  context: [] as string[],
  config: {
    reverse: false,
  },
  toastor: undefined as JSX.Element | React.ReactNode,
};

storage.set("state", state);

const store = {
  state: state,
  toasts: state.toasts,
  context: state.context,
  config: state.config,
  toastor: state.toastor,
};

export default store;
