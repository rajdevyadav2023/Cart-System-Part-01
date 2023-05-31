import React from 'react'
import { useDispatch } from 'react-redux'
import { AddCart } from './redux/cartSystem';
const Home = () => {
    const dispatch = useDispatch();
    const stocks = [
        {
            name: "Motherboard",
            price: '100'
        },
        {
            name: "Keyboard",
            price: '50'
        },
        {
            name: "Moniter",
            price: '150'
        },
        {
            name: "CPU",
            price: '200'
        },
        {
            name: "Mouse",
            price: '30'
        },
        {
            name: "Graphics Card",
            price: '80'
        },
    ]
    return (
        <div>
            
            <div className="container wrapped">
                {
                    stocks.map((stock, index) => {
                        return (<div className='stock' key={index + 1}>
                            <p>{stock.name}</p>
                            <p>${stock.price}</p>
                            <button onClick={()=>dispatch(AddCart(stock))}>Add To Cart</button>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Home
