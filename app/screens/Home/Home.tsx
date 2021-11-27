import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsList} from '../../actions/fetchProductsList';
import ProductCard from '../../components/ProductCard';
import {Colors} from '../../constants';
import {ADD_TO_CART, REMOVE_CART} from '../../constants';

const Home = () => {
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

  const onAddToCart = clickedItem => dispatch({type: ADD_TO_CART, clickedItem});

  const onRemove = (id: number) => dispatch({type: REMOVE_CART, id});

  return (
    <View style={styles.content}>
      {isLoading ? <Text style={styles.paragraph}>Loading....</Text> : null}
      {products.length && !isLoading ? (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductCard
              product={item}
              onAdd={onAddToCart}
              onRemove={onRemove}
            />
          )}
          keyExtractor={product => product.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      ) : (
        <Text style={styles.paragraph}>Empty</Text>
      )}
    </View>
  );
};

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
  seperator: {
    height: 1,
    backgroundColor: Colors.GRC5,
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Home;
