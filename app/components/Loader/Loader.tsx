import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../../constants';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.GRO3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
