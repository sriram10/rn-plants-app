import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

const PostDetails = ({ route }) => {
  const {
    post_author,
    post_date,
    post_date_gmt,
    post_content,
    post_title,
    post_excerpt,
    post_status,
    comment_status,
    ping_status,
    post_password,
    post_name,
    to_ping,
    pinged,
    post_modified,
    post_modified_gmt,
    post_content_filtered,
    post_parent,
    guid,
    menu_order,
    post_type,
    post_mime_type,
    comment_count,
    filter,
    address,
    phone,
    status,
    longitude,
    latitude,
  } = route.params.data;
  return (
    <SafeAreaView>
      <Text>{post_title}</Text>
      <Text>Name: {post_name}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Address: {address}</Text>
      <Text>Status: {status}</Text>
    </SafeAreaView>
  )
}

export default PostDetails;

/**
 * 
 
"ID": 91,
"post_author": "1",
"post_date": "2021-02-10 23:04:51",
"post_date_gmt": "2021-02-10 23:04:51",
"post_content": "",
"post_title": "webb software",
"post_excerpt": "",
"post_status": "publish",
"comment_status": "open",
"ping_status": "closed",
"post_password": "",
"post_name": "webb-software",
"to_ping": "",
"pinged": "",
"post_modified": "2021-02-10 23:04:51",
"post_modified_gmt": "2021-02-10 23:04:51",
"post_content_filtered": "",
"post_parent": 0,
"guid": "https://irfana.webbsoftwaretraining.com/?post_type=listar&#038;p=91",
"menu_order": 0,
"post_type": "listar",
"post_mime_type": "",
"comment_count": "0",
"filter": "raw",
"address": "35 stirling Street",
"phone": "0481039391",
"status": "",
"longitude": "",
"latitude": "",
"image": {
  "full": {
    "url": false
  },
  "medium": {
    "url": false
  },
  "thumb": {
    "url": false
  }
},
"category": {
  "term_id": 11,
  "name": "Others",
  "slug": "others",
  "term_group": 0,
  "term_taxonomy_id": 11,
  "taxonomy": "listar_category",
  "description": "",
  "parent": 0,
  "count": 2,
  "filter": "raw"
},
"links": {
  "self": {
    "href": "https://irfana.webbsoftwaretraining.com/wp-json/base/91"
  },
  "collection": {
    "href": "https://irfana.webbsoftwaretraining.com/wp-json/base"
  }
},
"rating_avg": 0,
"rating_count": 0,
"wishlist": false
 */