import { observable, action, computed } from "mobx";
import Item from "./Item";
class ItemStore {
  @observable items = [];
  @action addItem = item => {
    const _item = new Item(item, this);
    this.items.push(_item)
  };
  @computed get totalItems() {
    return this.items.length;
  }
  @computed get getPackedItems() {
    return this.items.filter(item => item.packed);
  }
  @computed get getUnPackedItems() {
    return this.items.filter(item => !item.packed);
  }
}

const store = new ItemStore();
export default store;
