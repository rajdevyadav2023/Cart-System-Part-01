
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(true);
   const {cart} = useSelector(item=>item.user);
   
   useEffect(()=>{
if(cart.length > 0){
  setIsEmpty(false);
}
else{
  setIsEmpty(true);
}
   }, [cart.length])

  return (
    <div>
      <div className="container">
      <p className='empty-text' style={{display: isEmpty? "block": "none"}}>Your Cart is Empty!</p>
          {
           cart.map((stock, index) => {
                return (<div className='stock' key={index + 1}>
                    <p>{stock.name}</p>
                    <p>${stock.price}</p>
                    <button>Buy Now</button>
                </div>)
            })
        }
        
       
      </div>
    </div>
  )
}

export default Cart
