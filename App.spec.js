import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';

import App from './App';
import ArticleList from './components/ArticleList';

describe('App', () => {
  it('renders View', () => {
    const AppWrapper = shallow(<App />);

    expect(AppWrapper.find(View)).toHaveLength(1);
  });

  describe('within View', () => {
    it('renders ArticleList', () => {
      const AppWrapper = shallow(<App />);

      expect(AppWrapper.find(ArticleList)).toHaveLength(1);
    });
  });
});
