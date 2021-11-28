import React from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import SearchInput from '../SearchInput';
import styles from './ListHeaderStyles';
import {Colors} from '../../constants';

interface ListHeaderProps {
  searchText: string;
  setSearchText: (text: string) => void;
  navigation: any;
}

const ListHeader = ({
  searchText,
  setSearchText,
  navigation,
}: ListHeaderProps) => {
  const cartCount = useSelector(state => state.cartReducer.carts);
  const hasItemsInCart = cartCount.length > 0;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>market</Text>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
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
          <TouchableHighlight
            onPress={() => {
              Alert.alert(
                'Logout',
                'Are you sure? You want to logout?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => null,
                  },
                  {
                    text: 'Confirm',
                    onPress: () => {
                      AsyncStorage.clear();
                      navigation.replace('AuthRoutes');
                    },
                  },
                ],
                {cancelable: false},
              );
            }}
            activeOpacity={0.6}
            style={{marginLeft: 15}}
            underlayColor="transparent"
            hitSlop={{right: 20}}>
            <Icon
              style={{backgroundColor: 'transparent'}}
              name="logout"
              size={20}
              color={Colors.GRC3}
            />
          </TouchableHighlight>
        </View>
      </View>
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
    </View>
  );
};

export default ListHeader;
