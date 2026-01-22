import React from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {

  const { getTotalCartAmount } = React.useContext(StoreContext); 

  return (
    <form action="" className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='First Name' />
          <input type="text" name="" id="" placeholder='Last Name' />
        </div>

        <input type="text" name="" id="" placeholder='Email address' />
        <input type="text" name="" id="" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='City' />
          <input type="text" name="" id="" placeholder='State' />
        </div>

        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='Zip Code' />
          <input type="text" name="" id="" placeholder='Country' />
        </div>

        <input type="text" name="" id="" placeholder='Phone' />
      </div>

      <div className="place-order-right">
       <div className="cart-total">
           <h2>Cart Totals</h2>
           <div>
               <div className="cart-total-details">
                   <p>Subtotal</p>
                   <p>{getTotalCartAmount()}</p>
               </div>
               <hr />
               <div className="cart-total-details">
                   <p>Delivery Fee</p>
                   <p>{getTotalCartAmount() > 0 ? 2 : 0}</p>
               </div>
               <hr />
               <div className="cart-total-details">
                   <p>Total</p>
                   <p>{getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}</p>
               </div>
               <button onClick={() => navigate('/order')} >Proceed To Checkout</button>
           </div>
           <div className="cart-promocode">
               <div>
                   <p>If you have a promocode, please enter it here</p>
                   <div className="cart-promocode-input">
                       <input type="text" placeholder="promocode" />
                       <button>submit</button>
                   </div>
               </div>
           </div>
         </div>
      </div>


    </form>
  )
}

export default PlaceOrder
