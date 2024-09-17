import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/action/meal';
import { MEALS } from '../data/dummy-data';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = props => {
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
    dispatch(toggleFavorite(selectedMeal.id));
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
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {  
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
