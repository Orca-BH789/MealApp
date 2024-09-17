import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderButton = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 10 }}>
      <Icon name={iconName} size={25} color="white" />
    </TouchableOpacity>
  );
};

export default HeaderButton;
