import React from "react"
import MenuItem from "../MenuItem"

export default class Menu extends React.Component {
    h1style = {
        color: 'white',
        textAlign: 'center',
        font: 'helvertica',
    };

    render() {
        return (
            <div>
                <h1 style={this.h1style}>{this.props.menuName} Menu</h1>
                {this.props.menuItems.map((menuId) => {
                    return (
                        <MenuItem {...menuId}></MenuItem>)
                })}
            </div>
        )
    }
}
