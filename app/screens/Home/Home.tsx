import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsList} from '../../actions/fetchProductsList';
import ProductCard from '../../components/ProductCard';
import Loader from '../../components/Loader';
import ListHeader from '../../components/ListHeader';
import NotFountView from '../../components/NotFountView';

import {Colors} from '../../constants';
import {ADD_TO_CART, REMOVE_CART, SEARCH_PRODUCT_LIST} from '../../constants';

interface HomeProps {
  navigation: any;
}
const Home = ({navigation}: HomeProps) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const setSearchTextCallback = useCallback(
    val => {
      dispatch({type: SEARCH_PRODUCT_LIST, searchKey: val});
      setSearchText(val);
    },
    [dispatch],
  );
  const {isLoading, error, products, filteredProducts} = useSelector(
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

  const renderEmpty = () => <NotFountView />;

  const onAddToCart = (clickedItem: object) =>
    dispatch({type: ADD_TO_CART, clickedItem});

  const onRemove = (id: number) => dispatch({type: REMOVE_CART, id});
  const data = searchText.length ? filteredProducts : products;
  return (
    <View style={styles.content}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ProductCard
              product={item}
              onAdd={onAddToCart}
              onRemove={onRemove}
            />
          )}
          keyExtractor={product => product.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          ListHeaderComponent={
            <ListHeader
              navigation={navigation}
              searchText={searchText}
              setSearchText={setSearchTextCallback}
            />
          }
          ListEmptyComponent={renderEmpty}
          stickyHeaderIndices={[0]}
        />
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
