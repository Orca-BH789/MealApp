
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = mealId => {
  return { type: TOGGLE_FAVORITE, mealId };
};
export const SET_SELECTED_MEAL = 'SET_SELECTED_MEAL';

export const setSelectedMeal = (meal) => {
  return {
    type: SET_SELECTED_MEAL,
    payload: meal,
  };
};