import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';

import ArticleThumbnail from './ArticleThumbnail';

const articleUrlExtractor = article => article.url;

const ArticleList = ({ articles }) =>
  articles.length ? (
    <FlatList
      data={articles}
      renderItem={ArticleThumbnail}
      keyExtractor={articleUrlExtractor}
    />
  ) : (
    <Text>Aucun article</Text>
  );

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export { articleUrlExtractor };
export default ArticleList;
