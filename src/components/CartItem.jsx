import React from 'react'
import { useContext } from 'react'
import ItemContext from '../ItemContext'

function CartItem(props) {
    const{id,name,img,price}=props.data
    const {cartItems,addToCart,removeFromCart}=useContext(ItemContext)
    console.log(cartItems)
  return (
    <div style={{display:'flex', gap:'30px', margin:'0px 40px 10px 40px',  padding:'20px 60px', border:'2px solid #c7897b',borderRadius:'20px'}}>
      <div style={{width:'15%'}}>
        <img style={{width:'100%'}}  src={img} alt="" />  
      </div>
      <div>
        <h2 style={{margin:'5px 0'}}>{name}</h2>
        <p>
          <h5 style={{margin:'2px 0'}}>Description : </h5>This is shirt fully made of cotton manufactured in india
          It is known for its comfort, breathability, and versatility, making it a popular choice in clothing
        </p>
        <h3 style={{margin:'5px'}}>Price : {price}</h3>
        <div>
        <button style={{width:'30px', height:'30px', marginRight:'10px'}}   onClick={()=>removeFromCart(id)}> - </button>
        <input style={{width:'50px', height:'30px'}}  type="text" value={cartItems[id]}/>
        <button style={{width:'30px', height:'30px', marginLeft:'10px'}}   onClick={()=>addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
