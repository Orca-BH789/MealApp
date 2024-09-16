import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data.js';
import MealItem from '../components/MealItem'; 

const CategoryMealScreen = props => {
  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

// Set the navigation options based on the category
CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.route.params.categoryId;
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoryMealScreen;
