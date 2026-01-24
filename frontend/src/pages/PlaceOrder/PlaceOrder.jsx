import React, { use, useState,useEffect } from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {

  const { getTotalCartAmount,token,food_list,cartItems,url } = React.useContext(StoreContext);
  
  const [data,setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(prevData => ({...prevData,[name]:value}));
  }

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item.id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item.id];
        orderItems.push(itemInfo);
      }
    });
    
    let orderData = {address:data,items:orderItems,amount:getTotalCartAmount()+2};

    let response = await axios.post(`${url}/api/order/place`,orderData,{headers:{token}});

    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    } else {
      alert('error')
    }

  }

  useEffect(() => {
    console.log(data);
  },[data]);

  return (
    <form onSubmit={placeOrder} action="" className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input required onChange={onChangeHandler} value={data.firstname} type="text" name="firstName" id="" placeholder='First Name' />
          <input required onChange={onChangeHandler} value={data.lastname} type="text" name="lastName" id="" placeholder='Last Name' />
        </div>

        <input required type="email" onChange={onChangeHandler} value={data.email} name="email" id="" placeholder='Email address' />
        <input required type="text" name="street" onChange={onChangeHandler} value={data.street} id="" placeholder='Street' />

        <div className="multi-fields">
          <input required type="text" name="city" onChange={onChangeHandler} value={data.city} id="" placeholder='City' />
          <input required type="text" name="state" onChange={onChangeHandler} value={data.state} id="" placeholder='State' />
        </div>

        <div className="multi-fields">
          <input required type="text" name="zipcode" onChange={onChangeHandler} value={data.zip} id="" placeholder='Zip Code' />
          <input required type="text" name="country" onChange={onChangeHandler} value={data.country} id="" placeholder='Country' />
        </div>

        <input required type="tel" name="phone" onChange={onChangeHandler} value={data.phone} id="" placeholder='Phone' />
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
               <button type='submit' onClick={() => navigate('/order')} >Proceed To Checkout</button>
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
