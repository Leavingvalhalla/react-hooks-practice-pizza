import React from 'react';

function Pizza({ pizza, onEditClick }) {
  function handleClick() {
    onEditClick(pizza);
  }

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Vegetarian' : 'Not Vegetarian'}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
