import React from "react"
import './Section_3.css'
import Section_3_img1 from './img/Section_3_img1.png'
import Section_3_img2 from './img/Section_3_img2.png'
export default function Section_3_Product() {
    return (
        <div className="Section_3">
            <div className="Section_3_container">
                <div className="Section_3_aside">
                    <div className="Section_3_text">
                    <h1>50+ Beautiful rooms inspiration</h1>
                    <h3>Our designer already made a lot of beautiful prototipe of rooms that inspire you</h3> 
                </div>
                <div className="Section_3_button">
                <a><button className='btn_section_3'>
                        Explore More
                </button></a>
                </div>
                </div>
                
                
                <div className="Section_3_images">
                    <img src={Section_3_img1} alt="" />
                    <img src={Section_3_img2} alt="" />
                </div>
            </div>
        </div>
    )
  }