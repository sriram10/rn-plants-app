import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

class PostList extends Component {
  // optional to use contructor
  constructor(props) {
    super(props); // mandatory line if constructor is placed
    this.state = {
      title: 'List of Posts',
      posts: []
    }
  }

  componentDidMount() {

    // fetch is a "Promise"
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json()
      })
      .then(data => {
        // console.log(data);
        const updatedData = [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data].map((item, i) => ({...item, customId: 'k'+i}))
        // merge data with the state object
        this.setState({
          posts: updatedData
        })
      })
      .catch(err => {

      })
  }

  render() {

    return (
      <FlatList
        style={{ flex: 1, padding: 20, backgroundColor: '#f3f3f3' }}
        data={this.state.posts}
        keyExtractor={item => item.customId}
        renderItem={({ item }) => {
          return (
            <Card elevation={4} style={{ marginBottom: 10 }} onPress={() => {
              this.props.navigation.navigate("PostDetailsScreen")
            }}>
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.body}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button uppercase={false} labelStyle={{ fontSize: 12 }}>Read more</Button>
              </Card.Actions>
            </Card>
          )
        }}
      />
    )
  }
}

export default PostList;