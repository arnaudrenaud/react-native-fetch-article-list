import React from 'react';
import { StyleSheet, View } from 'react-native';

import ArticleList from './components/ArticleList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  state = { articles: [] };

  componentDidMount() {
    fetch('https://server.com/api/articles')
      .then(response => response.json())
      .then(response => {
        this.setState({ articles: response.articles });
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <View style={styles.container}>
        <ArticleList articles={articles} />
      </View>
    );
  }
}
