import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Button} from 'react-native';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import ItemCard from './ItemCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {loading ? <LoadingScreen /> : null}

      {!loading && (
        <View>
          <FlatList
            data={products}
            renderItem={({item}) => <ItemCard item={item} />}
            keyExtractor={(item: any) => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
