import React from 'react';
import { shallow } from 'enzyme';
import { Text, View } from 'react-native';

import App from './App';

describe('App', () => {
  it('renders View', () => {
    const AppWrapper = shallow(<App />);

    expect(AppWrapper.find(View)).toHaveLength(1);
  });

  describe('within View', () => {
    it('renders Text with text "Aucun article"', () => {
      const AppWrapper = shallow(<App />);

      expect(
        AppWrapper.find(View)
          .find(Text)
          .dive()
          .text()
      ).toEqual('Aucun article');
    });
  });
});
