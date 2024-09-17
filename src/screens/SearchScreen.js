import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import { setSelectedMeal } from '../store/action/meal';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMeals([]);
      setIsSearching(false);
    } else {
      const filtered = MEALS.filter(meal =>
        meal.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMeals(filtered);
      setIsSearching(true);
    }
  }, [searchQuery]);

  const handleMealSelect = (meal) => {
    dispatch(setSelectedMeal(meal));
    navigation.navigate('MealDetail', { mealId: meal.id });
  };

  const renderMealItem = ({ item }) => (
    <TouchableOpacity
      style={styles.mealItem}
      onPress={() => handleMealSelect(item)}
    >
      <Text style={styles.mealTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredMeals([]);
    setIsSearching(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm món ăn..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {isSearching && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text>X</Text>
          </TouchableOpacity>
        )}
      </View>
      {isSearching ? (
        <FlatList
          data={filteredMeals}
          renderItem={renderMealItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Không tìm thấy món ăn nào</Text>
          }
        />
      ) : (
        <Text style={styles.instructionText}>
          Nhập tên món ăn để bắt đầu tìm kiếm
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  clearButton: {
    padding: 5,
    marginLeft: 5,
  },
  mealItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  mealTitle: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  instructionText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default SearchScreen;
