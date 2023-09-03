const storage = new Map();

const state = {
  toasts: [] as (JSX.Element | React.ReactNode)[],
  context: [] as string[],
  config: {
    reverse: false,
  }
}

storage.set('state', state);

const store = {
  state: state,
  toasts: state.toasts,
  context: state.context,
  config: state.config
}

export default store;