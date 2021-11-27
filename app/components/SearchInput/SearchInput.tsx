import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, TextInput, Text} from 'react-native';
import styles from './SearchInputStyles';
import {Colors} from '../../constants';
/**
 * Search bar component
 * **/
const SearchInput = ({searchText, setSearchText}) => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <Icon
          style={{backgroundColor: 'transparent'}}
          name="search"
          size={20}
          color={Colors.GRC3}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => setSearchText(text)}
          placeholder={'Search for any item'}
          autoCapitalize="none"
          value={searchText}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={Colors.GRC3}
        />
      </View>
    </View>
  );
};

export default SearchInput;
