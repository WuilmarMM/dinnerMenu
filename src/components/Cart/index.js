import React from "react"


export default class Cart extends React.Component {
    render() {
        return(
            <p>You have {this.state} items in the cart</p>
        )
    }
}