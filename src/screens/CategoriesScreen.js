import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(null);

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        img={itemData.item.img}
        onSelect={() => {
          setSelectedCategoryId(itemData.item.id);
          props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id });
        }}
        isSelected={itemData.item.id === selectedCategoryId}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
