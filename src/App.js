import React, { Component } from "react";
import "./App.css";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class App extends Component {
  state = { value: "" };
  addItem = () => {
    this.props.store.addItem({ id: Date.now(), value: this.state.value });
  };
  render() {
    console.log(this.props.store);
    return (
      <>
         Total Items = {this.props.store.totalItems}
        <input
          type="text"
          value={this.state.item}
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
        />
        <button onClick={this.addItem}>Add Item</button>
        {this.props.store.items.map(i => (
          <div>{i.value}</div>
        ))}

      </>
    );
  }
}

export default App;
