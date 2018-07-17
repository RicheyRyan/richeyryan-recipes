import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEquipment,
  getHints,
  getIngredients,
  getSteps,
  getRecipes,
} from "./selectors";
import {
  filterIngredients,
  filterEquipment,
  filterPrepTime,
  clearFilter,
  deleteRecipe,
} from "../reducers/actions";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import FilterButtons from "./FilterButtons";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
    };
  }

  handleClickRecipe = currentRecipe => {
    this.setState({ currentRecipe });
  };

  handleBack = () => {
    this.setState({ currentRecipe: null });
  };

  handleDeleteRecipe = id => {
    this.props.deleteRecipe(id);
    this.setState({
      currentRecipe: null,
    });
  };

  handleFilterIngredients = ingredients => {
    this.props.filterIngredients(ingredients);
  };

  handleFilterEquipment = equipment => {
    this.props.filterEquipment(equipment);
  };

  handleFilterPrepTime = (prepTime, comparisonType) => {
    this.props.filterPrepTime(prepTime, comparisonType);
  };

  handleClearFilter = () => {
    this.props.clearFilter();
  };

  render() {
    const { recipes } = this.props;
    const { currentRecipe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Richey's Recipes</h1>
        </header>
        {currentRecipe ? (
          <React.Fragment>
            <button onClick={this.handleBack}>Go back</button>
            <Recipe
              recipe={recipes.find(({ id }) => id === currentRecipe)}
              onDelete={this.handleDeleteRecipe}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FilterButtons
              onFilterIngredients={this.handleFilterIngredients}
              onFilterEquipment={this.handleFilterEquipment}
              onFilterPrepTime={this.handleFilterPrepTime}
              onClearFilter={this.handleClearFilter}
            />
            <RecipeList
              recipes={recipes}
              onClickRecipe={this.handleClickRecipe}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: getRecipes(state, state.recipes).map(
    ({ title, id, equipment, steps, ingredients, hints, prep }) => {
      return {
        id,
        title,
        prep,
        equipment: getEquipment(state, equipment),
        steps: getSteps(state, steps),
        ingredients: getIngredients(state, ingredients),
        hints: getHints(state, hints),
      };
    }
  ),
});

const mapDispatchToProps = dispatch => ({
  filterEquipment: equipment => dispatch(filterEquipment(equipment)),
  filterIngredients: ingredients => dispatch(filterIngredients(ingredients)),
  filterPrepTime: (prepTime, comparisonType) =>
    dispatch(filterPrepTime(prepTime, comparisonType)),
  clearFilter: () => dispatch(clearFilter()),
  deleteRecipe: recipe => dispatch(deleteRecipe(recipe)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
