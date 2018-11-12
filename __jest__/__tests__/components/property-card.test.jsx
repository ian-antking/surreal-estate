import React from 'react';
import Enzyme from 'enzyme';
import PropertyCard from '../../../src/components/property-card';

let mockProperty;
let wrapper;

beforeEach(() => {
  mockProperty = {
    title: 'mockTitle',
    type: 'mockType',
    bathrooms: 'mockBathrooms',
    bedrooms: 'mockBedrooms',
    price: 'mockPrice',
    city: 'mockCity',
    email: 'mockEmail',
  };
  wrapper = Enzyme.shallow((
    <PropertyCard
      property={mockProperty}
    />
  ));
});

it('renders the property tile', () => {
  expect(wrapper.find('.property-card__title').text()).toBe(mockProperty.title);
});
