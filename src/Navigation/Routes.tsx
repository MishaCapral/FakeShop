import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FavouriteContextProvider from '../context/favoritesContext';
import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from './navigationStrings';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <FavouriteContextProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={navigationStrings.HOME}
          screenOptions={{
            headerTitleAlign: 'center',
            drawerType: 'slide',
          }}>
          {MainStack(Drawer)}
        </Drawer.Navigator>
      </NavigationContainer>
    </FavouriteContextProvider>
  );
};

export default Routes;
