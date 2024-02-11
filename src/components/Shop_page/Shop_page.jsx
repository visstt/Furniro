import './Shop_page.css';
import React from 'react';
import Items from './Items';
class Shop_page extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                id: 1,
                title: 'Sofa',
                img: 'item_logo1.png',
                desc: 'Lorem ipsum dolor sit amet',
                catecory: 'chairs',
                price: '500$'
                },
                {
                id: 2,
                title: 'Design',
                img: 'item_logo2.png',
                desc: 'Lorem ipsum dolor sit amet',
                catecory: 'chairs',
                price: '1500$'
                },
                {
                id: 3,
                title: 'Chair',
                img: 'item_logo3.png',
                desc: 'Lorem ipsum dolor sit amet',
                catecory: 'chairs',
                price: '5100$'
                },
                {
                id: 4,
                title: 'Table',
                img: 'item_logo4.png',
                desc: 'Lorem ipsum dolor sit amet',
                catecory: 'chairs',
                price: '4500$'
                },
                {
                id: 5,
                title: 'Sofa',
                img: 'item_logo1.png',
                desc: 'Lorem ipsum dolor sit amet',
                catecory: 'chairs',
                price: '500$'
                },
                {
                id: 6,
                title: 'Design',
                img: 'item_logo2.png',
                desc: 'Lorem ipsum dolor sit amet',
                catecory: 'chairs',
                price: '1500$'
                },
                {
                id: 7,
                title: 'Chair',
                img: 'item_logo3.png',
                desc: 'Lorem ipsum dolor sit amet',
                catecory: 'chairs',
                price: '5100$'
                },
                {
                id: 8,
                title: 'Table',
                img: 'item_logo4.png',
                desc: 'Lorem ipsum dolor sit amet',
                catecory: 'chairs',
                price: '4500$'
                }
            ]
        }
    }
    
    render()
    {
        return(
        <>
            <Items items={this.state.items} />
        </>
    )}

}
export default Shop_page;