import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useFavoriteContext} from '../context/favoritesContext';
import ItemCard from './ItemCard';

const Favorites = () => {
  const {favorites}: any = useFavoriteContext();
  return (
    <SafeAreaView style={styles.root}>
      {favorites.length === 0 ? (
        <View style={styles.noFavoritesView}>
          <Text style={styles.emptyText}>Favorites are empty</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item}) => <ItemCard item={item} />}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  noFavoritesView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 20,
  },
});
