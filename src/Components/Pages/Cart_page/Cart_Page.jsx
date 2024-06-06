import Nav_cart_page from './Nav_cart_page'
import Main_cart_page from './Main_cart_page'
import Section_inf from '../ShopPage/Section_inf/Section_inf'

export default function Cart_page(){
    return(
        <div className="Cart_page">
            <Nav_cart_page/>
            <Main_cart_page/>
            <div className="nav_cart">
                <Section_inf/>
            </div>
        </div>
    )
}