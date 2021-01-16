import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostList from './screens/PostList';
import PostDetails from './screens/PostDetails';
import Starter from './screens/Starter';
import HomeDrawer from './navigations/HomeDrawer';

const Stack = createStackNavigator();

/**
 * Type of navigations
 *  - Stack
 *  - Bottom Tab Bar
 *  - Drawer
 */

 /**
  * -> Getting Started (Action Button : Start) - Stack 
  *   -> Home Screen (Drawer menu - default menu: Store List)
  *     -> Stores Home (banner and top 10 stores list) - Stack
  *        -> Stores List (click on store card)
  *        -> Store Details
  *     -> About us
  *     -> Contact us
  */

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Starter" component={Starter} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeDrawer} options={{ headerShown: false }} />
        {/* <Stack.Screen name="HomeScreen" component={Home} options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="PostScreen" component={PostList} options={{ title: "Posts" }} />
        <Stack.Screen name="PostDetailsScreen" component={PostDetails} options={{ title: "Post Content" }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;