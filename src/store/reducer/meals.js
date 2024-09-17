// src/store/reducers/meals.js
import { TOGGLE_FAVORITE } from '../action/meal';
import { MEALS } from '../../data/dummy-data';

const initialState = {
  meals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        // Remove from favorites
        const updatedFavorites = [...state.favoriteMeals];
        updatedFavorites.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavorites };
      } else {
        // Add to favorites
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    default:
      return state;
  }
};

export default mealsReducer;
