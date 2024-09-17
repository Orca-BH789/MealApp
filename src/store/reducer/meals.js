// src/store/reducers/meals.js
import { TOGGLE_FAVORITE, SET_SELECTED_MEAL } from '../action/meal';
import { MEALS } from '../../data/dummy-data';

const initialState = {
  meals: MEALS,
  favoriteMeals: [],
  selectedMeal: null, // Sửa lại giá trị khởi tạo
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId // Sửa từ action.mealId thành action.payload
      );
      if (existingIndex >= 0) {
        // Remove from favorites
        const updatedFavorites = [...state.favoriteMeals];
        updatedFavorites.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavorites };
      } else {
        // Add to favorites
        const meal = state.meals.find(meal => meal.id === action.mealId); // Sửa từ action.mealId thành action.payload
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_SELECTED_MEAL:
      return {
        ...state,
        selectedMeal: action.payload,
      };
    default:
      return state;
  }
};

export default mealsReducer;
