import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

const ArticleThumbnail = ({ item }) => <ListItem title={item.title} />;

ArticleThumbnail.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleThumbnail;
