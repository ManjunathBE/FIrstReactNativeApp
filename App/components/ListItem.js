import React, {PropTypes} from 'react';
import {View, Text, Image, TouchableHighlight, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, {CHEVRON_SIZE} from './styles';
import {capitalizeFirstLetter} from '../helpers/string';
import colors from '../config/colors';

const ListItem = ({contact, onPress}) => {
  return (
    <View>
      <Text>{contact.email}</Text>
    </View>
  );
};

// ListItem.propTypes = {
//   contact: PropTypes.object,
//   onPress: PropTypes.func,
// };

export default ListItem;
