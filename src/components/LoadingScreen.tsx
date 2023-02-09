import {ActivityIndicator, View, StyleSheet} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.loading]}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 1, 35, 0.25)',
  },
});
