import { makeObservable, observable, action, computed } from "mobx";

export class Store {
  theme: 'light' | 'dark' = 'light';

  constructor() {
    makeObservable(this, {
      theme: observable,
      setTheme: action
    });
  }

  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;
  }
}
