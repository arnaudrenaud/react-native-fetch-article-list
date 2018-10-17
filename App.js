import React from 'react';
import { StyleSheet, View } from 'react-native';

import ArticleList from './components/ArticleList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <View style={styles.container}>
    <ArticleList />
  </View>
);
