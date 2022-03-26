import React from 'react';

// so many props! zooming out, is there a better way to do this?
// it feels like to control the form it's all necessary.

function PizzaForm({
  topping,
  setTopping,
  size,
  setSize,
  vegetarian,
  handleVegChange,
  id,
  onUpdate,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const newPizza = {
      id: id,
      topping: topping,
      size: size,
      vegetarian: vegetarian,
    };

    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPizza),
    })
      .then((res) => res.json())
      .then(onUpdate);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={(e) => setTopping(e.target.value)}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            onChange={(e) => setSize(e.target.value)}
          >
            {/* very clunky conditional statements: better way? */}
            {size === 'Small' ? (
              <option value="Small" selected>
                Small
              </option>
            ) : (
              <option value="Small">Small</option>
            )}
            {size === 'Medium' ? (
              <option value="Medium" selected>
                Medium
              </option>
            ) : (
              <option value="Medium">Medium</option>
            )}
            {size === 'Large' ? (
              <option value="Large" selected>
                Large
              </option>
            ) : (
              <option value="Large">Large</option>
            )}
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={handleVegChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
            />

            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleVegChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
            />

            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
