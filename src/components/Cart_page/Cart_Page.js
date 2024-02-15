import Header from '../Header/Header'
import Nav_cart_page from './Nav_cart_page'
import Main_cart_page from './Main_cart_page'
import Section_inf  from '../Shop_page/Section_inf/Section_inf'
import Footer from '../Footer/Footer'
export default function Cart_page(){
    return(
        <div className="Cart_page">
            <Header/>
            <Nav_cart_page/>
            <Main_cart_page/>
            <div className="nav_cart">
                <Section_inf/>
            </div>
            <Footer/>
        </div>
    )
}