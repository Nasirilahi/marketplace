import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import styles from './ThankYouStyles';

const ThankYou = ({navigation}) => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={require('../../common/assets/thank_you.png')}
        style={styles.emptyImage}
      />
      <Text style={styles.emptyText}>Your Order has been placed.</Text>
      <Text style={styles.emptySubText}>
        Please Hold tight and you will get a confirmation shortly.
      </Text>
      <Button
        text={'Keep Shopping'}
        onPress={() => navigation.replace('AppRoutes')}
      />
    </View>
  );
};

export default ThankYou;
