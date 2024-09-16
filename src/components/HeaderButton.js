import React from 'react';
// import { HeaderButton } from 'react-navigation-header-buttons';
// import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const cHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color="white"
    />
  );
};

export default cHeaderButton;