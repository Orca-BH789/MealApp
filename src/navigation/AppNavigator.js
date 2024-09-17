import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import store from '../store/store'; 
import SearchScreen from '../screens/SearchScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

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
const MealsNavigator = () => (
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
    <MealsStackNavigator.Screen
      name="MealDetail"
      component={MealDetailScreen}
    />
  </MealsStackNavigator.Navigator>
);

const FavStackNavigator = createStackNavigator();
const FavNavigator = () => (
  <FavStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
    <FavStackNavigator.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{ title: 'Your Favorites' }}
    />
    <FavStackNavigator.Screen
      name="MealDetail"
      component={MealDetailScreen}
    />
  </FavStackNavigator.Navigator>
);

const Tab = createBottomTabNavigator();
const MealsFavTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Meals') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        }
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#f4511e',
      tabBarInactiveTintColor: 'gray',
      tabBarLabel: () => null,
    })}
  >
    <Tab.Screen name="Meals" component={MealsNavigator} options={{ headerShown: false }} />
    <Tab.Screen name="Favorites" component={FavNavigator} options={{ headerShown: false }} />
    <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const SettingsStackNavigator = createStackNavigator();
const SettingsNavigator = () => (
  <SettingsStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
    <SettingsStackNavigator.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ title: 'Settings' }}
    />
  </SettingsStackNavigator.Navigator>
);



const MainDrawerNavigator = createDrawerNavigator();
const MainNavigator = () => (
  <MainDrawerNavigator.Navigator
    screenOptions={{
      drawerActiveTintColor: '#f4511e',
      drawerStyle: { paddingTop: 0 },
    }}
  >
    <MainDrawerNavigator.Screen
      name="Menu"
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

export default function AppNavigator() {
  return (
    <Provider store={store}> 
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
}
