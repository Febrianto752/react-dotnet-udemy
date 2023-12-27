import { action, makeAutoObservable, makeObservable, observable } from "mobx";

export default class ActivityStore {
  title = "Hello from Mobx";

  constructor() {
    // makeObservable(this, {
    //   title: observable,
    //   setTitle: action,
    // });
    makeAutoObservable(this);
  }

  setTitle = () => {
    this.title = this.title + "!";
  };
}
