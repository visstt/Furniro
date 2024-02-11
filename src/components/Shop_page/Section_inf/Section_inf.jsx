import './Section_inf.css';
import cup from './img/cup.png';
import verificate from './img/verificate.png';
import chest from './img/chest.png';
import support from './img/support.png';
export default function Section_inf(){
    return(
        <div className='Section_inf'>
            <div className="block_inf">
                 <img src={cup} alt="" />
                 <div className="text_inf_block">
                    <h1>High Quality</h1>
                     <h2>crafted from top materials</h2>
                 </div>
            </div>
           
            <div className="block_inf">
                 <img src={verificate} alt="" />
                 <div className="text_inf_block">
                    <h1>Warranty Protection</h1>
                     <h2>Over 2 years</h2>
                 </div>
            </div>

            <div className="block_inf">
                 <img src={chest} alt="" />
                 <div className="text_inf_block">
                    <h1>Free Shipping</h1>
                     <h2>Order over 150 $</h2>
                 </div>
            </div>

            <div className="block_inf">
                 <img src={support} alt="" />
                 <div className="text_inf_block">
                    <h1>24 / 7 Support</h1>
                     <h2>Dedicated support</h2>
                 </div>
            </div>
        </div>
    )
}