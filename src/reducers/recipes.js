import {
  FILTER_EQUIPMENT,
  FILTER_INGREDIENTS,
  FILTER_PREP_TIME,
  DELETE_RECIPE,
  CLEAR_FILTER,
} from "../reducers/actions";

const emptyFilter = {
  ingredients: [],
  equipment: [],
  prep: {},
};

export default (state = {}, action) => {
  switch (action.type) {
    case CLEAR_FILTER:
      return {
        ...state,
        filter: emptyFilter,
      };

    case DELETE_RECIPE:
      return {
        ...state,
        filter: emptyFilter,
        recipes: {
          byId: getNextById(state.recipes, action.payload),
          allIds: getNextAllIds(state.recipes, action.payload),
        },
      };

    case FILTER_INGREDIENTS:
      return {
        ...state,
        filter: {
          ...emptyFilter,
          ingredients: action.payload,
        },
      };

    case FILTER_EQUIPMENT:
      return {
        ...state,
        filter: { ...emptyFilter, equipment: action.payload },
      };

    case FILTER_PREP_TIME:
      return {
        ...state,
        filter: {
          ...emptyFilter,
          prep: action.payload,
        },
      };

    default:
      return state;
  }
};

const getNextAllIds = (recipes, deleteId) =>
  recipes.allIds.filter(id => id !== deleteId);

const getNextById = (recipes, deleteId) =>
  Object.values(recipes.byId).reduce((next, recipe) => {
    if (recipe.id === deleteId) {
      return next;
    }
    return {
      ...next,
      [recipe.id]: recipe,
    };
  }, {});
