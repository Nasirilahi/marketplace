import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../Button';
import styles from './EmptyCartStyles';

const EmptyCart = ({navigation}) => {
  return (
    <View style={styles.emptyContainer} testID="emptyView">
      <Image
        source={require('../../common/assets/empty_cart.png')}
        style={styles.emptyImage}
      />
      <Text style={styles.emptyText}>
        You don't have any items in your cart
      </Text>
      <Text style={styles.emptySubText}>
        Your favourite items are just a click away
      </Text>
      <Button
        text={'Start Shopping'}
        onPress={() => navigation.replace('AppRoutes')}
      />
    </View>
  );
};

export default EmptyCart;
