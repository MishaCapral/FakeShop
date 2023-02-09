import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={[styles.root, styles.item, styles.elevation]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          color={'rgba(8, 1, 35, 0.20)'}
          size={42}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  title: {
    fontSize: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

export default Profile;
