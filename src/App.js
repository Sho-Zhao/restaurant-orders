import React from 'react';
import './App.css';
import DrinkOrder from './component/drinkOrder';
import { Routes, Route } from 'react-router';
import OrderedList from './component/orderedList';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<DrinkOrder />} />
        <Route path=":tablenum" element={<DrinkOrder />} />
        <Route path="/foradmin/" element={<OrderedList />} />
      </Routes>
    </React.Fragment>
    );
}

export default App;
