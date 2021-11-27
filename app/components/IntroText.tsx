import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsList} from '../actions/fetchProductsList';
import ProductCard from './ProductCard';

function IntroText() {
  const [currentItemsInCart, setCurrentItemsInCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const {isLoading, error, products} = useSelector(
    ({productsData: productsDataStore}) => productsDataStore,
  );
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  if (error) {
    return (
      <View style={styles.content}>
        <Text style={styles.paragraph}>error</Text>
      </View>
    );
  }

  const onAdd = (product) => console.log('Add', product);

  const onRemove = (id) => console.log('Remove', id);

  return (
    <View style={styles.content}>
      {isLoading ? <Text style={styles.paragraph}>Loading....</Text> : null}
      {products.length && !isLoading ? (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductCard product={item} onAdd={onAdd} onRemove={onRemove} />
          )}
          keyExtractor={product => product.id.toString()}
          style={{paddingLeft: 10, paddingRight: 10}}
        />
      ) : (
        <Text style={styles.paragraph}>Empty</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default IntroText;
