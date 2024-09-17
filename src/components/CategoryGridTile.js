import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';

const CategoryGridTile = ({ title, img, onSelect, isSelected }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={[styles.container, isSelected && styles.selectedContainer]}>
        <ImageBackground
          source={{ uri: img }}
          style={styles.bgImage}
          imageStyle={styles.bgImageStyle}
          onError={() => console.log('Error loading image')} // Add error handling
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  selectedContainer: {
    borderWidth: 3,
    borderColor: 'green',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bgImageStyle: {
    borderRadius: 10,
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'right',
  },
});

export default CategoryGridTile;
