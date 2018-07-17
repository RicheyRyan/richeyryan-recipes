import React from "react";

export default ({
  recipe: { hints, id, ingredients, equipment, title, prep, steps },
  onDelete,
}) => (
  <React.Fragment>
    <h3>
      {title}
      <button onClick={() => onDelete(id)}>Delete</button>
    </h3>
    <p>Prep time: {prep}</p>
    <p>Ingredients:</p>
    <ol>
      {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
    </ol>
    <p>Equipment:</p>
    <ol>{equipment.map(e => <li key={e}>{e}</li>)}</ol>
    <p>Steps:</p>
    <ol>{steps.map(step => <li key={step}>{step}</li>)}</ol>
    <p>Hints:</p>
    <ol>
      {hints.map(({ title, description }) => (
        <li key={title}>
          <p>{title}</p>
          <p>{description}</p>
        </li>
      ))}
    </ol>
  </React.Fragment>
);
