import { observable,action } from "mobx";

class Item {
  id;
  value;
  @observable packed;
  constructor({id = Date.now(), value, packed = false},list) {
    this.id = id;
    this.value = value;
    this.packed = packed;
    this.list=list;
  }
  @action.bound UnpackItem = () =>{
      this.packed=false;
  }
  @action.bound PackItem = () =>{
      this.packed=true;
  }
  @action.bound toggleItem(){
    this.packed = !this.packed;
  }
}


export default Item;