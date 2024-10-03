import React from 'react'
import { Link } from 'react-router-dom'

export default function Main_cart_page() {
  return (
    <div className='Main_cart_page'>
        <div className="main_cart">
            <h1>Product</h1>
            <h1>Prise</h1>
            <h1>Quantity</h1>
            <h1>Subtotal</h1>
        </div>

        <div className="aside_cart">
            <h1>Cart Totals</h1>
            <div className="little">
                <h3>Subtotal: $20.98</h3>
                <h3>Total:  $20.98</h3>
            </div>

            <Link to="/"><button class="btn_cart_page">Checkout</button></Link>
        </div>
    </div>
  )
}
