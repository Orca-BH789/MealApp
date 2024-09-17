import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/action/meal';
import { MEALS } from '../data/dummy-data';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = props => {
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
console.log(selectedMeal);
  if (!selectedMeal) {
    return (
      <View style={styles.screen}>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  const dispatch = useDispatch();
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const isFavorite = favoriteMeals.some(meal => meal.id === selectedMeal.id);

  const toggleFavoriteHandler = () => {
    if (selectedMeal && selectedMeal.id) {
      dispatch(toggleFavorite(selectedMeal.id));
    } else {
      console.log('Selected meal or meal id is undefined');
    }
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          iconName={isFavorite ? 'heart' : 'heart-outline'}
          onPress={toggleFavoriteHandler}
        />
      ),
    });
  }, [props.navigation, isFavorite, dispatch]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => (
        <View key={ingredient} style={styles.ingredientContainer}>
          <Text style={styles.ingredientText}>{ingredient}</Text>
          {index < selectedMeal.ingredients.length - 1 && (
            <View style={styles.separator} />
          )}
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <View key={step} style={styles.stepContainer}>
          <Text style={styles.stepNumber}>{index + 1}. </Text>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {  
    fontSize: 24, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  listItemText: {
    fontSize: 18, 
  },
  ingredientContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  ingredientText: {
    fontSize: 18,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
  },
  stepContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight:5,
  },
  stepText: {
    fontSize: 18,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
