import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PostList from '../screens/PostList';
import PostDetails from '../screens/PostDetails';

const Stack = createStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StoreHome" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="StoreList" component={PostList} options={{ headerShown: false }} />
      <Stack.Screen name="StoreDetail" component={PostDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StoreStack;