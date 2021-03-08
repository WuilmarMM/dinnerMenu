import React from "react"

export default class MenuItem extends React.Component {
  render() {
    return (<div className="menu-item" id={`menu-item-${this.props.itemId}`}>
              <h2>{this.props.itemName}</h2>
              <span>${this.props.itemPrice }</span>
              <p>{this.props.itemDescription}</p>
          <button onClick={console.log("clicked")}>Add to Cart</button>
          </div>
    );
  }
}