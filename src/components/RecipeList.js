import React from "react";

export default ({ recipes, onClickRecipe }) => (
  <ul>
    {recipes.map(recipe => (
      <li key={recipe.title}>
        <h3
          onClick={() => {
            onClickRecipe(recipe.id);
          }}
        >
          {recipe.title}
        </h3>
      </li>
    ))}
  </ul>
);
