import React from 'react';
import Enzyme from 'enzyme';
import Alert from '../../../src/components/alert';


it('renders the message passed into it', () => {
  const error = 'Error!';
  const wrapper = Enzyme.shallow((
    <Alert message={error} />
  ));
  expect(wrapper.find('.alert').text()).toBe(error);
});

it('renders a success message', () => {
  const success = 'The System Works!';
  const wrapper = Enzyme.shallow((
    <Alert message={success} success />
  ));
  expect(wrapper.find('.alert.success').text()).toBe(success);
});
