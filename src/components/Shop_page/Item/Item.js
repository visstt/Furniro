import React, { Component } from 'react'
import './Item.css'
export class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="cart_add_container">
          <img src={"./img/" + this.props.item.img} alt="" />
        </div>
        <div className="text_item">
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}<div className="plus">+</div></b>
            
        </div>
        
      </div>
    )
  }
}

export default Item