import { comparisonTypes } from "../reducers/constants";
const {
  LESS_THAN_EQUAL,
  LESS_THAN,
  GREATER_THAN_EQUAL,
  GREATER_THAN,
  EQUAL,
} = comparisonTypes;

// If we think performance is going to be a concern we could
// memoize these functions.
// Also they can be tested easily as pure functions
export const getRecipes = ({ filter }, recipes) => {
  const recipesById = Object.values(recipes.byId);
  const { equipment, ingredients, prep } = filter;
  return recipesById.filter(
    recipe =>
      filterByEquipment(recipe, equipment) &&
      filterByIngredients(recipe, ingredients) &&
      filterByPrep(recipe, prep)
  );
};

export const filterByEquipment = (recipe, equipment) =>
  !equipment.length || hasFilters(recipe.equipment, equipment);

export const filterByIngredients = (recipe, ingredients) =>
  !ingredients.length || hasFilters(recipe.ingredients, ingredients);

export const filterByPrep = (recipe, { prep, comparisonType }) => {
  if (!prep && !comparisonType) {
    return true;
  }
  if (comparisonType === LESS_THAN_EQUAL) {
    return recipe.prep <= prep;
  } else if (comparisonType === GREATER_THAN_EQUAL) {
    return recipe.prep >= prep;
  } else if (comparisonType === LESS_THAN) {
    return recipe.prep < prep;
  } else if (comparisonType === GREATER_THAN) {
    return recipe.prep > prep;
  } else if (comparisonType === EQUAL) {
    return recipe.prep === prep;
  }
};

export const hasFilters = (arr, filters) =>
  filters.every(item => arr.includes(item));

export const getEquipment = (state, equipment) =>
  equipment.map(id => state.equipment.byId[id].name);

export const getSteps = (state, steps) =>
  steps.map(id => state.steps.byId[id].text);

export const getIngredients = (state, ingredients) =>
  ingredients.map(id => {
    const { quantity, text } = state.ingredients.byId[id];
    return `${quantity} ${text}`;
  });

export const getHints = (state, hints) => hints.map(id => state.hints.byId[id]);
