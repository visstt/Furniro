import { Link } from 'react-router-dom';
import './Section_1.css';

export default function Header(){

    return(
        <div className="Section_1">
            <div className="aside_block">
                <div className="inner">
                    <h3>New Arrival</h3>
                    <h1>Discover Our <br />New Collection</h1>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nemo adipisci illo, repellat commodi odit.</h2>
                
                    <Link to='/ShopPage'><button className='btn_section_1'>
                        BUY NOW
                    </button></Link>
                </div>
            </div>
        </div>
    ) 
}
