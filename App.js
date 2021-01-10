import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostList from './screens/PostList';
import PostDetails from './screens/PostDetails';

const Stack = createStackNavigator();

/**
 * Type of navigations
 *  - Stack
 *  - Bottom Tab Bar
 *  - Drawer
 */

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="PostScreen" component={PostList} options={{ title: "Posts" }} />
        <Stack.Screen name="PostDetailsScreen" component={PostDetails} options={{ title: "Post Content" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;