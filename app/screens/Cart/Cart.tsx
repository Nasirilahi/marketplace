import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../../components/Button';
import EmptyCart from '../../components/EmptyCart';
import HorizontalProductCard from '../../components/HorizontalProductCard';
import styles from './CartStyles';

const Cart = ({navigation}) => {
  const cartItems = useSelector(state => state.cartReducer.carts);
  const hasItems = cartItems.length > 0;
  const renderEmptyView = () => <EmptyCart navigation={navigation} />;
  const renderHeaderView = () =>
    hasItems ? (
      <View>
        <View style={styles.headerContainer}>
          <Text>Total Shipment items</Text>
          <Text>{cartItems.length} item(s)</Text>
        </View>
        <View style={styles.merchantContainer}>
          <Text style={styles.deliveryETA}>delivery by Tomorrow</Text>
          <Text style={styles.merchantBy}>from Super Store - XYZ</Text>
        </View>
      </View>
    ) : null;

  const renderFooterView = () =>
    hasItems ? (
      <>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.billDetailsLabel}>Bill details</Text>
          </View>
          <View style={styles.mrpContainer}>
            <Text>MRP</Text>
            <Text> ₹100</Text>
          </View>
          <View style={styles.mrpContainer}>
            <Text>Delivery Charges</Text>
            <Text> ₹100</Text>
          </View>
          <View style={styles.mrpContainer}>
            <Text style={styles.totalLabel}>Bill total</Text>
            <Text style={styles.totalLabel}> ₹100</Text>
          </View>
        </View>
        <View style={{padding: 10, marginTop: 10, backgroundColor: 'white'}}>
          <Button
            text={'Proceed to checkout'}
            onPress={() => navigation.navigate('Thankyou')}
          />
        </View>
      </>
    ) : null;
  return (
    <FlatList
      data={cartItems}
      renderItem={({item: cartItem}) => {
        const idx = cartItems.findIndex(item => item.id === cartItem.id);
        let currentItemsInCart = 0;
        if (idx > -1) {
          currentItemsInCart = cartItems[idx].quantity;
        }
        return (
          <HorizontalProductCard
            key={cartItem.id}
            currentItemsInCart={currentItemsInCart}
            cartItem={cartItem}
          />
        );
      }}
      keyExtractor={product => product.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      ListEmptyComponent={renderEmptyView}
      ListHeaderComponent={renderHeaderView}
      ListFooterComponent={renderFooterView}
    />
  );
};

export default Cart;
