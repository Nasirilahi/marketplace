import React from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import AddToCartButton from '../AddToCart';
import {ADD_TO_CART, REMOVE_CART} from '../../constants';
import styles from './HorizontalProductCardStyles';

const HorizontalProductCard = ({cartItem, currentItemsInCart}) => {
  const dispatch = useDispatch();
  const totalPrice = cartItem.price * cartItem.quantity;
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: cartItem.image}} style={styles.imageContainer} />
      </View>

      <View style={{flex: 1}}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {cartItem.title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.categoryTag}>
          {cartItem.category}
        </Text>
        <View style={styles.atcContainer}>
          <AddToCartButton
            currentItemsInCart={currentItemsInCart}
            onAdd={() => dispatch({type: ADD_TO_CART, clickedItem: cartItem})}
            onDisabledAdd={() => {}}
            onRemove={() => dispatch({type: REMOVE_CART, id: cartItem.id})}
          />
        </View>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPricetage}>₹{totalPrice.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default HorizontalProductCard;
