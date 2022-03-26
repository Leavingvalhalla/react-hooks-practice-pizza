import React, { useState, useEffect } from 'react';
import Header from './Header';
import PizzaForm from './PizzaForm';
import PizzaList from './PizzaList';

function App() {
  const [pizzas, setPizzas] = useState('');
  const [topping, setTopping] = useState('');
  const [size, setSize] = useState('');
  const [vegetarian, setVegetarian] = useState(true);
  const [id, setId] = useState(true);
  const [update, setUpdate] = useState(false);

  useEffect(
    () =>
      fetch('http://localhost:3001/pizzas')
        .then((res) => res.json())
        .then((data) => setPizzas(data)),
    [update]
  );

  function onEditClick(pizzaClicked) {
    setTopping(pizzaClicked.topping);
    setSize(pizzaClicked.size);
    setVegetarian(pizzaClicked.vegetarian);
    setId(pizzaClicked.id);
  }

  function onVegChange() {
    setVegetarian((vegetarian) => !vegetarian);
  }

  // i made a state just to get the page to update with useEffect:
  // bad practice? better way?

  function onUpdate() {
    setUpdate((update) => !update);
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
        handleVegChange={onVegChange}
        id={id}
        onUpdate={onUpdate}
      />
      <PizzaList pizzas={pizzas} onEditClick={onEditClick} />
    </>
  );
}

export default App;
