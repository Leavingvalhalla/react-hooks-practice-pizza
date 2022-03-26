import React, { useState, useEffect } from 'react';
import Header from './Header';
import PizzaForm from './PizzaForm';
import PizzaList from './PizzaList';

function App() {
  const [pizzas, setPizzas] = useState('');
  const [topping, setTopping] = useState('');
  const [size, setSize] = useState('');
  const [vegetarian, setVegetarian] = useState('');

  useEffect(
    () =>
      fetch('http://localhost:3001/pizzas')
        .then((res) => res.json())
        .then((data) => setPizzas(data)),
    []
  );

  function onEditClick(pizzaClicked) {
    setTopping(pizzaClicked.topping);
    setSize(pizzaClicked.size);
    setVegetarian(pizzaClicked.vegetarian);
  }

  return (
    <>
      <Header />
      <PizzaForm
        topping={topping}
        setTopping={setTopping}
        size={size}
        setSize={setSize}
        vegetarian={vegetarian}
        setVegetarian={setVegetarian}
      />
      <PizzaList pizzas={pizzas} onEditClick={onEditClick} />
    </>
  );
}

export default App;
