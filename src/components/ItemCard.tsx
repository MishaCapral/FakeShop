import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useFavoriteContext} from '../context/favoritesContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationStrings from '../Navigation/navigationStrings';

const ItemCard = ({item}: any): any => {
  const navigation = useNavigation<any>();
  const {favorites, addToFavoritesHandler}: any = useFavoriteContext();
  return (
    <TouchableOpacity
      style={[styles.item, styles.elevation]}
      onPress={() => navigation.navigate(navigationStrings.ITEM, {item: item})}>
      <View>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.title}>Price: {item.price}$</Text>

      <TouchableOpacity
        onPress={() => addToFavoritesHandler(item)}
        style={styles.button}>
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
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
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
  button: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
