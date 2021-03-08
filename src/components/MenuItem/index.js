import React from "react"

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value:[0] }
  }

  handleClick() {
    this.setState((prevState) => {
      let newValue = prevState.value + 1
      this.props.updateValue(newValue)
      return {
        value: newValue,
      }
    })
  }
  render() {
    return (<div key={this.props.itemId} className="menu-item" id={`menu-item-${this.props.itemId}`}>
              <h2>{this.props.itemName}</h2>
              <span>${this.props.itemPrice }</span>
              <p>{this.props.itemDescription}</p>
          <button onClick={this.handleClick}>Add to Cart</button>
          </div>
    );
  }
}