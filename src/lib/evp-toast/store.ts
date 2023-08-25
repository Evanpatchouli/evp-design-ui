// import * as zustand from 'zustand';

const storage = new Map();

const state = {
  toasts: [] as JSX.Element[]
}

storage.set('state', state);

const store = {
  state: state,
  toasts: state.toasts
}

// const store = zustand.create<typeof state>( set => (state));

export default store;