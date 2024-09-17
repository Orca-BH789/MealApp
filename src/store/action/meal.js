// actions/meals.js

  // src/store/actions/meals.js
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = mealId => {
  return { type: TOGGLE_FAVORITE, mealId };
};
