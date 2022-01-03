import React from 'react';
import './App.css';
import DrinkList from './drinkList'

function App() {
  const data =[
    {
      'name': 'Name1',
      'img' : 'http://abehiroshi.la.coocan.jp/abe-top-20190328-2.jpg',
    },
    {
      'name' : 'Name2',
      'img' : 'http://www.cj-c.com/img/title.gif',
    }
  ]

  return (
    <div>
      {data.map(() => (
      <DrinkList name={data['name']} img={data['img']} />
      ))}
    </div>
    );
}

export default App;
