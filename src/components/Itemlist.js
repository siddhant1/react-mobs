import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Item from "./Item";

@inject("store")
@observer
class ItemList extends Component {
  state = { packed: false, value: "" };

  handleChange = e => {
      e.persist()
    const name = e.target.name;
    console.log({name})
    this.setState(current => {
      return {
        ...current,
        [name]: e.target.value
      };
    });
  };

  addItem = () => {
    const { store } = this.props;
    store.addItem(this.state);
  };
  render() {
    const { store } = this.props;
    console.log(store)
    return (
      <>
        Total Items = {store.totalItems}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                value={this.state.packed}
                onChange={this.handleChange}
                name="packed"
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            name="value"
            className="form-control"
            aria-label="Text input with checkbox"
          />
        </div>
        <button onClick={this.addItem}>Add Items</button>
        <h2>Packed Items</h2>
        {store.getPackedItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
        <h2>UnPacked Items</h2>
        {store.getUnPackedItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </>
    );
  }
}

export default ItemList;
