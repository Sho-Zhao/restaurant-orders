import React, { useState } from 'react';
import Cart from './cart';
import DrinkList from './drinkList'
import DrinkListDatas from '../drinklist.json'

export default function DrinkOrder() {
  const [orderList, setOrder] = useState([]);

  const clearOrder = () =>{
    let emptyList = []
    setOrder(emptyList)
  };

  const addOrder = drink =>{
    const newList = [...orderList]
    newList.push(drink)
    setOrder(newList)
  };

  return (
    <React.Fragment>
      <h1 className='App'>Drink Order</h1>
      <DrinkList drinkdata={DrinkListDatas} 
      orderDrink={addOrder}/>
      <Cart orderList={orderList} 
            onClear={clearOrder}/>
    </React.Fragment>
    );
}