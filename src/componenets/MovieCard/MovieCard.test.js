import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard } from './MovieCard.js';

describe('MovieCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieCard averageRating={6.456}/>)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
