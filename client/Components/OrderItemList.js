import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { CartItem } from '../Components'
import { useGetCartItemsQuery, useUpdateCartItemMutation } from '../store/slices'

const Wrapper = styled(FlexColContainer)`
  min-width: 56vw;
  background-color: red;
  position: absolute;
  top: 4.2em;
  right: -1em
`

const OrderItemList = ({ cart }) => {
  const { data, isLoading, isError } = useGetCartItemsQuery(cart.id)
  const [cartItems, setCartItems] = useState(data || [])
  const [updateQty] = useUpdateCartItemMutation()

  useEffect(() => {
    if (data) {
      setCartItems(data);
    }
  }, [data])

  if(isLoading) {
    return ( <div> Loading... </div> )
  }
  
  if(isError) {
    return ( <div> Error Fetching Data </div> )
  }

  const incrementQty = (item, cartItems) => {
    const updatedItem = Object.assign({ ...item, quantity: item.quantity + 1 })
    const newItems = cartItems.map(cartItem => cartItem.id === item.id ? updatedItem : cartItem)
    setCartItems(newItems)
    updateQty(updatedItem)
  }
  
  const decrementQty = (item, cartItems) => {
    const updatedItem = Object.assign({ ...item, quantity: item.quantity -1 })
    const newItems = cartItems.map(cartItem => cartItem.id === item.id ? updatedItem : cartItem)
    setCartItems(newItems)
    updateQty(updatedItem)
  }

  return (
    <Wrapper>
      {cartItems && 
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleIncrement={() => incrementQty(item, cartItems)}
            handleDecrement={() => decrementQty(item, cartItems)}
          />
        ))}
    </Wrapper>
  )
}

export default OrderItemList
