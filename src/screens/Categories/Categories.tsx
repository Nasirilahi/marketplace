import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Loader from '../../components/Loader';
import {API_URL} from '../../constants';

const Categories = () => {
  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/products/categories`)
      .then(res => res.json())
      .then(result => {
        setCategories(result);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error:', error);
      });
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        categories.map((categoryItem, index) => (
          <View key={index} style={styles.categoryView} testID="categoryView">
            <Text>{categoryItem}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  categoryView: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
export default Categories;
