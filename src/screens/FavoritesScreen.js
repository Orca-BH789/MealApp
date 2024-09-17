import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux'; 

const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.mealItem}
        onPress={() => {
          props.navigation.navigate('MealDetail', {
            mealId: itemData.item.id
          });
        }}
      >
        <View style={styles.itemContainer}>
          <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{itemData.item.title}</Text>
            <View style={styles.details}>
              <Text style={styles.detailText}>Duration: {itemData.item.duration}m</Text>
              <Text style={styles.detailText}>Complexity: {itemData.item.complexity.toUpperCase()}</Text>
              <Text style={styles.detailText}>Affordability: {itemData.item.affordability.toUpperCase()}</Text>
            </View>
          </View>       
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      {favoriteMeals.length === 0 ? (
        <Text>No favorite meals found. Start adding some!</Text> 
      ) : (
        <FlatList
          data={favoriteMeals}
          renderItem={renderMealItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    elevation: 3
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10
  },
  detailsContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  details: {
    flexDirection: 'column'
  },
  detailText: {
    fontSize: 14,
    color: '#555'
  }
});

export default FavoritesScreen;
