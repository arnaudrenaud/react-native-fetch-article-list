import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';

import ArticleThumbnail from './ArticleThumbnail';

const ArticleList = ({ articles }) =>
  articles.length ? (
    <FlatList data={articles} renderItem={ArticleThumbnail} />
  ) : (
    <Text>Aucun article</Text>
  );

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleList;
