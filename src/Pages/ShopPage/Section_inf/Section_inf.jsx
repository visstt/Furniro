import React from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import './Section_inf.css';
import cup from './img/cup.png';
import verificate from './img/verificate.png';
import chest from './img/chest.png';
import support from './img/support.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section_inf() {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const blocks = [
        {
            img: cup,
            title: "High Quality",
            subtitle: "crafted from top materials"
        },
        {
            img: verificate,
            title: "Warranty Protection",
            subtitle: "Over 2 years"
        },
        {
            img: chest,
            title: "Free Shipping",
            subtitle: "Order over 150 $"
        },
        {
            img: support,
            title: "24 / 7 Support",
            subtitle: "Dedicated support"
        }
    ];

    return (
        <div className='Section_inf'>
            {isMobile ? (
                <div className="mobile-slider-container">
                    <Slider {...settings}>
                        {blocks.map((block, index) => (
                            <div key={index} className="block_inf">
                                <div className="img_wrapper">
                                    <img src={block.img} alt={block.title} />
                                </div>
                                <div className="text_inf_block">
                                    <h1>{block.title}</h1>
                                    <h2>{block.subtitle}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className="block_container">
                    {blocks.map((block, index) => (
                        <div key={index} className="block_inf">
                            <div className="img_wrapper">
                                <img src={block.img} alt={block.title} />
                            </div>
                            <div className="text_inf_block">
                                <h1>{block.title}</h1>
                                <h2>{block.subtitle}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
