import React from 'react';
import { shallow } from 'enzyme';
import { FlatList, Text } from 'react-native';

import articles from '../exampleData';
import ArticleThumbnail from './ArticleThumbnail';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  describe('when passed no articles', () => {
    const noArticles = [];

    it('renders Text with text "Aucun article"', () => {
      const ArticleListWrapper = shallow(<ArticleList articles={noArticles} />);

      expect(
        ArticleListWrapper.find(Text)
          .dive()
          .text()
      ).toEqual('Aucun article');
    });
  });

  describe('when passed articles', () => {
    it('renders FlatList with articles', () => {
      const ArticleListWrapper = shallow(<ArticleList articles={articles} />);

      const FlatListWrapper = ArticleListWrapper.find(FlatList);
      expect(FlatListWrapper.prop('data')).toEqual(articles);
      expect(FlatListWrapper.prop('renderItem')).toEqual(ArticleThumbnail);
    });
  });
});
