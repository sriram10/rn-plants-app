/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from 'react-native-paper';
// import Button from './components/Button';
import { ASSETS } from '../constants/imageAssets';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const data = [
  {
    title: "Plant A",
    description: "Some content",
    image: "A",
  },
  {
    title: "Plant B",
    description: "Some content",
    image: "A",
  },
  {
    title: "Title",
    description: "Some content",
    image: "A",
  },
  {
    title: "Title",
    description: "Some content",
    image: "A",
  },
  {
    title: "Title",
    description: "Some content",
    image: "A",
  },
  {
    title: "Title",
    description: "Some content",
    image: "A",
  },
  {
    title: "Title",
    description: "Some content",
    image: "A",
  },
  {
    title: "Title",
    description: "Some content",
    image: "A",
  },
  {
    title: "Title",
    description: "Some content",
    image: "A",
  },
];


/**
 * 
 * Image URL - <Image source={{ uri: URL }} style={{ width: 50, height: 50 }} />
 * Image File - 
 *  1. import the image - import NAME from './assets/image.png'
 *  2. const NAME = require('./assets/image.png');
 *  2. <Image source={NAME} style={{ width: 50, height: 50 }} />
 * 
 * Props:
 *  ResizeMode: 
 */

const bannerImageUrl = 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80';

const Home = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState({ title: 'test' })
  
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* Self closing tags */}
      {/* <StatusBar barStyle="dark-content"/>  */}
      {/* children */}
      <View style={styles.container}>
        <Text>Menu</Text>
        <Text style={{ fontSize: 24 }}>Title</Text>
        <Text>Login</Text>
      </View>


      <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={ASSETS.bannerPlants}
          style={{ width: '100%', height: height/3 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ padding: 20 }}>
        <Button mode="contained" onPress={() => {
          navigation.navigate("PostScreen");
        }}>View Posts</Button>
      </View>
      <ScrollView>
        {
          [...data, ...data, ...data, ...data].map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.listItem} onPress={() => {
                setActiveItem(item)
                setShowModal(true)
                // navigation.navigate("PostScreen");
                }}>
                <Text>{item.title} - {index}</Text>
                <Text>{item.description}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      <Modal
        animationType={"slide"}
        visible={showModal}
        transparent={true}
      >
        <SafeAreaView style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.1)'
        }}>
          <View style={{ backgroundColor: 'white', width: width, padding: 20 }}>
            <Text>Modal Content</Text>
            <Text>{activeItem.title}</Text>
            <Button onPress={() => setShowModal(false)}>Close</Button>
            <TouchableHighlight
              underlayColor={"green"}
              onPress={() => {
                setShowModal(false)
              }}
              style={{ width: 200, height: 44, borderRadius: 4, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>Close</Text>
            </TouchableHighlight>

          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  )
}

// spread & Rest operator
// css flex
// css box modal

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row', // column
    justifyContent: 'space-between', // flex-start
    alignItems: 'center', // flex-start
  },
  listItem: {
    padding: 15,
    fontSize: 16,
    backgroundColor: '#ffffff',
    margin: 10,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)', // 0-255,
    borderRadius: 10
  },
})

export default Home;
