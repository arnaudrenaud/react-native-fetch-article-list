import React from 'react';
import { StyleSheet, View } from 'react-native';

import articles from './exampleData';
import ArticleList from './components/ArticleList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default () => (
  <View style={styles.container}>
    <ArticleList articles={articles} />
  </View>
);
