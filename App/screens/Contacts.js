/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {contacts} from '../config/data';
import color from '../config/colors';
import {ListItem} from '../components';

class Contacts extends Component {
  render() {
    return (
     <FlatList
        style={{ backgroundColor:color.background}}
        data = {contacts}
        renderItem={({item}) => <ListItem contact={item} onPress={() => this.handleRowPress(item)} />}
        keyExtractor={(item)=> item.email}
     />
    );
  }
}
export default Contacts;
