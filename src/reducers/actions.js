export const CLEAR_FILTER = "CLEAR_FILTER";
export const FILTER_INGREDIENTS = "FILTER_INGREDIENTS";
export const FILTER_EQUIPMENT = "FILTER_EQUIPMENT";
export const FILTER_PREP_TIME = "FILTER_PREP_TIME";
export const DELETE_RECIPE = "DELETE_RECIPE";

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export const filterIngredients = ingredients => ({
  type: FILTER_INGREDIENTS,
  payload: ingredients,
});

export const filterEquipment = equipment => ({
  type: FILTER_EQUIPMENT,
  payload: equipment,
});

export const filterPrepTime = (prep, comparisonType) => ({
  type: FILTER_PREP_TIME,
  payload: {
    prep,
    comparisonType,
  },
});

export const deleteRecipe = recipe => ({
  type: DELETE_RECIPE,
  payload: recipe,
});
