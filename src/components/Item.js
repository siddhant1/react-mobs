import React, { Component } from "react";
import { inject } from "mobx-react";

class Item extends Component {
  handleToggle = () => {
    const {item} = this.props
    item.toggleItem()
  };
  render() {
    const { item } = this.props;
    console.log(item)
    return (
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            onChange={this.handleToggle}
            type="checkbox"
            checked={item.packed}
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            {item.value}
          </label>
        </div>
      </div>
    );
  }
}

export default Item;
