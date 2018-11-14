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

it('renders the property tite', () => {
  expect(wrapper.find('.property-card__title').text()).toBe(mockProperty.title);
});

it('renders the property type and city', () => {
  expect(wrapper.find('.property-card__type-city').text()).toBe(`${mockProperty.type} - ${mockProperty.city}`);
});

it('renders the property bathrooms', () => {
  expect(wrapper.find('.property-card__bathrooms-text').text()).toBe(mockProperty.bathrooms);
});

it('renders the property bedrooms', () => {
  expect(wrapper.find('.property-card__bedrooms-text').text()).toBe(mockProperty.bedrooms);
});

it('renders the property price', () => {
  expect(wrapper.find('.property-card__price-text').text()).toBe(mockProperty.price);
});

it('renders the property email', () => {
  expect(wrapper.find('.property-card__email .btn').prop('href')).toBe(`mailto:${mockProperty.email}`);
});
