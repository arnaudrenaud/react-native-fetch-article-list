import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';

import ArticleList from './ArticleList';

describe('ArticleList', () => {
  it('renders Text with text "Aucun article"', () => {
    const ArticleListWrapper = shallow(<ArticleList />);

    expect(
      ArticleListWrapper.find(Text)
        .dive()
        .text()
    ).toEqual('Aucun article');
  });
});
