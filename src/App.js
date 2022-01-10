import React, { useState } from 'react';
import './App.css';
import Cart from './component/cart';
import DrinkList from './component/drinkList'
import DrinkListDatas from './drinklist.json'

function App() {
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

export default App;
