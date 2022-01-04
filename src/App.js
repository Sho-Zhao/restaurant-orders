import React from 'react';
import './App.css';
import Cart from './component/cart';
import DrinkList from './component/drinkList'

function App() {
  const datas =[
    {
      'name': 'ビール',
      'img' : 'https://2.bp.blogspot.com/-g0tX6LwKRvU/UgSL9bM2b9I/AAAAAAAAW4g/j8GETOhjCCA/s400/drink_beer.png',
    },
    {
      'name' : 'ハイボール',
      'img' : 'https://1.bp.blogspot.com/-yTyVR-MkXRs/XGjzEE7oWDI/AAAAAAABRls/_-Qcz_hk4iQv69agEdZC0xBdD3qqoNgpACLcBGAs/s350/party_highball_jug.png',
    },
    {
      'name': 'ビール',
      'img' : 'https://2.bp.blogspot.com/-g0tX6LwKRvU/UgSL9bM2b9I/AAAAAAAAW4g/j8GETOhjCCA/s400/drink_beer.png',
    },
    {
      'name' : 'ハイボール',
      'img' : 'https://1.bp.blogspot.com/-yTyVR-MkXRs/XGjzEE7oWDI/AAAAAAABRls/_-Qcz_hk4iQv69agEdZC0xBdD3qqoNgpACLcBGAs/s350/party_highball_jug.png',
    }
  ]

  return (
    <React.Fragment>
      <h1>Drink Order</h1>
      <DrinkList drinkdata={datas}/>
      <Cart/>
    </React.Fragment>
    );
}

export default App;
