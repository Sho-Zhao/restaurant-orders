import './App.css';
import './drinkList.js'

function App() {
  const names=['Name1', "Name2"];
  const imgs=['http://abehiroshi.la.coocan.jp/abe-top-20190328-2.jpg', 'http://www.cj-c.com/img/title.gif'];

  return (
    <drinkList name={names[1]} img={imgs[1]} /> 
  );
}

export default App;
