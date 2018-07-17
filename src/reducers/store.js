import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import recipes from "./recipes";
import intialState from "./initialState";

export default function configureStore() {
  return createStore(recipes, intialState, applyMiddleware(logger));
}
