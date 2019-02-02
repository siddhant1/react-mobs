import { observable, action, computed } from "mobx";

class ItemStore {
  @observable items = [];
  @action addItem = item => {
    this.items.push(item);
  };
  @computed get totalItems() {
    return this.items.length;
  }
}

const store = new ItemStore();
export default store;
