import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#f4511e' : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : '#f4511e',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MealsStackNavigator = createStackNavigator();

const MealsNavigator = () => {
  return (
    <MealsStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <MealsStackNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'Meal Categories' }}
      />
      <MealsStackNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
      />
      {/* <MealsStackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
      /> */}
    </MealsStackNavigator.Navigator>
  );
};

const FavStackNavigator = createStackNavigator();

const FavNavigator = () => {
  return (
    <FavStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <FavStackNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Your Favorites' }}
      />
      {/* <FavStackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
      /> */}
    </FavStackNavigator.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Meals') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f4511e',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavNavigator} />
    </Tab.Navigator>
  );
};

const SettingsStackNavigator = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <SettingsStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </SettingsStackNavigator.Navigator>
  );
};

const MainDrawerNavigator = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <MainDrawerNavigator.Navigator
      screenOptions={{
        drawerActiveTintColor: '#f4511e',
        drawerStyle: {
          marginVertical: 0,
        },
      }}
    >
      <MainDrawerNavigator.Screen
        name="DuyTun"
        component={MealsFavTabNavigator}
        options={{
          drawerLabel: 'Meals',
          drawerIcon: ({ color }) => (
            <Ionicons name="restaurant" size={24} color={color} />
          ),
        }}
      />
      <MainDrawerNavigator.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </MainDrawerNavigator.Navigator>
  );
};

export default function AppNavigator() {
  return (
    // <NavigationContainer>
      <MainNavigator />
    // </NavigationContainer>
  );
}
