import React from 'react';
import './App.css';
import DrinkList from './component/drinkList'
import Cart from './component/cart';

function App() {
  const datas =[
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
      {datas.map((data) => (
      <DrinkList name={data['name']} img={data['img']} />
      ))}
      <Cart/>
    </React.Fragment>
    );
}

export default App;
