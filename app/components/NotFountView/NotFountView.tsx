import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const NotFountView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../common/assets/noresults.png')}
        style={{width: 200, height: 200, resizeMode: 'contain'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
export default NotFountView;
