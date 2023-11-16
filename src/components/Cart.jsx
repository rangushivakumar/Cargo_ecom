import React, { useContext } from 'react'
import Productitems from './productitems'
import ItemContext from '../ItemContext'
import CartItem  from './CartItem'
import '../header.css'
import { Link } from 'react-router-dom'

function Cart() {
    const {cartItems,getTotalCartAmount}=useContext(ItemContext)
    const totalAmount=getTotalCartAmount()
  return (
    <>
      <div>
        <h1 style={{textAlign:'center', padding:'40px 0 0 0', color:'#088178',marginBottom:'30px'}}>your cart items</h1>
      </div>
      <div>
        {Productitems.map((product)=>{
            if(cartItems[product.id]!==0){
                return(
                    <CartItem data={product}/>
                )
            }
        })}
      </div>
      {
        totalAmount>0 ? 
        <div className='cartbuttons'> 
            <h3>subtotal : {totalAmount}</h3>
            <button>Continue shopping</button>
            <button >Checkout</button>
        </div>
        : <h1 style={{textAlign:'center', padding:'40px 0 0 0', color:'#088178', marginBottom:'40px'}}>your cart is empty</h1>
      }
    </>
  )
}

export default Cart
