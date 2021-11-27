import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import SearchInput from '../SearchInput';
import styles from './ListHeaderStyles';
import {Colors} from '../../constants';

interface ListHeaderProps {
  searchText?: string;
  setSearchText?: () => void;
  navigation: {};
}

const ListHeader = ({searchText, setSearchText, navigation}: ListHeaderProps) => {
  const cartCount = useSelector(state => state.cartReducer.carts);
  const hasItemsInCart = cartCount.length > 0;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>market</Text>
        {hasItemsInCart ? (
          <TouchableHighlight
            onPress={() => navigation.navigate('CartScreen')}
            activeOpacity={0.6}
            underlayColor="transparent"
            hitSlop={{right: 20}}>
            <Icon
              style={{backgroundColor: 'transparent'}}
              name="shoppingcart"
              size={30}
              color={Colors.GRC1}
            />
          </TouchableHighlight>
        ) : (
          <Icon
            style={{backgroundColor: 'transparent'}}
            name="shoppingcart"
            size={30}
            color={Colors.GRC3}
          />
        )}

        {hasItemsInCart ? (
          <View style={styles.countLabelContainer}>
            <Text style={styles.countLabel}>{cartCount.length}</Text>
          </View>
        ) : null}
      </View>
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
    </View>
  );
};

export default ListHeader;
