import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../components/Home';
import Categories from '../components/Categories';
import Favorites from '../components/Favorites';
import navigationStrings from './navigationStrings';
import Item from '../components/Item';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
      <Stack.Screen name={navigationStrings.ITEM} component={Item} />
    </Stack.Navigator>
  );
};

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        //---- STYLING BOTTOM TAB ------
        // tabBarActiveTintColor: 'blue',
        // tabBarStyle: {
        //   position: 'absolute',
        //   borderRadius: 20,
        // },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="animation" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
