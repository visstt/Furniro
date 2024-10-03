import React from 'react';
import './Section_2.css';
import img_section2 from './img/img_section2.png';
import img2_section2 from './img/img2_section2.png';
import img3_section2 from './img/img3_section2.png';

export default function Section_2() {
    return (
        <div className='Section_2'>
            <div className="text_Section_2">
                <h1>Browse The Range</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>
            <div className="img_container">
                <div className="block1">
                    <img src={img_section2} alt="Dinner" />
                    <h1>Dinner</h1>
                </div>
                <div className="block2">
                    <img src={img2_section2} alt="Living" />
                    <h1>Living</h1>
                </div>
                <div className="block3">
                    <img src={img3_section2} alt="Bedroom" />
                    <h1>Bedroom</h1>
                </div>
            </div>
        </div>
    );
}
