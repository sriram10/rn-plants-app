import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import StoreStack from './StoreStack';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="StoreHome" component={StoreStack} options={{ title: 'Stores' }} />
      <Drawer.Screen name="About" component={Home} options={{ title: "About us" }} />
      <Drawer.Screen name="Contact" component={Home} options={{ title: "Contact us" }} />
    </Drawer.Navigator>
  );
}

export default HomeDrawer