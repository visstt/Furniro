import React, { Component } from 'react'
import Item from './Item'
export class Items extends Component {
  render() {
    return (
      <div className='main'>
          {this.props.items.map(el =>(
            <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
          ))}
      </div>
    )
  }
}

export default Items