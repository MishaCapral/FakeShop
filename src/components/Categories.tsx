import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

const RenderItem = ({item}: any): any => {
  return (
    <View style={[styles.item, styles.elevation]}>
      <Text style={styles.title}>{item}</Text>
    </View>
  );
};

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(res => {
        setCategories(res.data);
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
            data={categories}
            renderItem={({item}) => <RenderItem item={item} />}
            keyExtractor={(item: any) => item}
            //style={styles.list}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  // list: {
  //   backgroundColor: '#fff',
  //   height: 800,
  // },
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
});
