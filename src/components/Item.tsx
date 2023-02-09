import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useFavoriteContext} from '../context/favoritesContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

const Item = ({navigation, route}: any) => {
  const {item} = route.params;

  const {favorites, addToFavoritesHandler}: any = useFavoriteContext();
  const [itemData, setItemData] = useState<any>({});
  const [ratingData, setRatingData] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${item.id}`)
      .then(response => {
        setItemData(response.data);
        setRatingData(response.data.rating);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {loading ? <LoadingScreen /> : null}

      {!loading && (
        <View style={[styles.item, styles.elevation, styles.root]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              color={'rgba(8, 1, 35, 0.20)'}
              size={42}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Category: {itemData.category}</Text>
          <View>
            {itemData.image ? (
              <Image
                source={{uri: itemData.image}}
                style={styles.image}
                resizeMode="contain"
              />
            ) : null}
          </View>

          <Text style={styles.title}>{itemData.title}</Text>
          <Text>{itemData.description}</Text>
          <Text style={styles.title}>Price: {itemData.price}$</Text>
          <Text style={styles.title}>Rating: {ratingData.rate}</Text>

          <TouchableOpacity
            onPress={() => addToFavoritesHandler(item)}
            style={styles.favoriteButton}>
            {favorites.includes(item) ? (
              <MaterialCommunityIcons
                name="heart"
                color={'rgba(8, 1, 35, 0.20)'}
                size={42}
              />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                color={'rgba(8, 1, 35, 0.20)'}
                size={42}
              />
            )}
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Item;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: 'rgba(8, 1, 35, 0.09)',
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  backButton: {
    position: 'relative',
    top: -10,
    left: -10,
  },
});
