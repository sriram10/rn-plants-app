import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class PostList extends Component {
  // optional to use contructor
  constructor(props) {
    super(props); // mandatory line if constructor is placed
    this.state = {
      title: 'List of Posts',
      posts: [],
      category: {},
    }
  }

  componentDidMount() {

    const { category, posts } = this.props.route?.params || {};
    this.setState({
      category,
      posts
    })

    // fetch is a "Promise"
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     // console.log(data);
    //     const updatedData = [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data].map((item, i) => ({...item, customId: 'k'+i}))
    //     // merge data with the state object
    //     this.setState({
    //       posts: updatedData
    //     })
    //   })
    //   .catch(err => {

    //   })
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <View style={{ flex: 1, backgroundColor: 'red' }}>
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 13.0827,
              longitude: 80.2707,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >

          </MapView>
        </View> */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>{this.state.category?.name}</Text>
        </View>
        <View style={{ flex: 1 }}>

          <FlatList
            style={{ flex: 1, padding: 20, backgroundColor: '#f3f3f3' }}
            data={this.state.posts}
            keyExtractor={item => item.ID}
            renderItem={({ item }) => {
              return (
                <Card elevation={4} style={{ marginBottom: 10 }} onPress={() => {
                  this.props.navigation.navigate("StoreDetail", {
                    data: item
                  })
                }}>
                  <Card.Content>
                    <Title>{item.post_title}</Title>
                    <Paragraph>{item.post_name}</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <Button uppercase={false} labelStyle={{ fontSize: 12 }}>Read more</Button>
                  </Card.Actions>
                </Card>
              )
            }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default PostList;