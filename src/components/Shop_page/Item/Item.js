import React, { Component } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
export class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="cart_add_container">
          <img src={"./img/" + this.props.item.img} alt="" />
        <Link to={'/'}> <button className='btn_cart' >Add to cart</button> </Link>
        </div>
        <div className="text_item">
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}</b>
            <div className="plus" onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
        
      </div>
    )
  }
}

export default Item