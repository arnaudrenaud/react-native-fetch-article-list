import React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from 'react-native-elements';

import articles from '../exampleData';
import ArticleThumbnail from './ArticleThumbnail';

describe('ArticleThumbnail', () => {
  const article = articles[0];

  it('renders ListItem', () => {
    const ArticleThumbnailWrapper = shallow(
      <ArticleThumbnail item={article} />
    );

    expect(ArticleThumbnailWrapper.find(ListItem).prop('title')).toEqual(
      article.title
    );
  });
});
