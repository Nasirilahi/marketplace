import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import AddToCartButton from '../AddToCart';
import styles from './ProductCardStyle';

interface ProductCardProps {
  product: {
    image: string;
    title: string;
    description: string;
    price: string;
    rating: {
      rate: string;
      count: string;
    };
  };
  onAdd: () => void;
  onRemove: () => void;
}
const ProductCard = (props: ProductCardProps) => {
  const {product} = props;
  const currentCart = useSelector(state => state.cartReducer.carts);
  const idx = currentCart.findIndex(item => item.id === product.id);
  let currentItemsInCart = 0;
  if (idx > -1) {
    currentItemsInCart = currentCart[idx].quantity;
  }
  return (
    <View style={styles.cardContainer}>
      <View style={styles.thumnailContainer}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.productThumbnail}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.descriptionTitle}>
            {product.title}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.descriptionSubTile}>
            {product.description}
          </Text>
        </View>
        <View style={styles.detailWrapper}>
          <View>
            <Text style={styles.descriptionPrice}>₹{product.price}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.star}>&#9733;</Text>
              <Text style={styles.starRating}>{product?.rating?.rate}</Text>
              <Text style={styles.ratingCount}>({product?.rating?.count})</Text>
            </View>
          </View>

          <View style={styles.atcButton}>
            <AddToCartButton
              currentItemsInCart={currentItemsInCart}
              onAdd={() => props.onAdd(product)}
              onDisabledAdd={() => {}}
              onRemove={() => props.onRemove(product.id)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
