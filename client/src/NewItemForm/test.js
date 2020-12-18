import React from 'react';
import { shallow } from 'enzyme';
import { NewItemForm } from './NewItemForm.js';

describe('NewItemForm', () => {

  it('is an input', () => {
    const wrapper = shallow(<NewItemForm />);
    const type = wrapper.type();
    expect(type).toEqual('input');
  });

  it('passes className as class', () => {
    const wrapper = shallow(<NewItemForm className={'foo'} />);
    expect(wrapper.hasClass('foo')).toBeTruthy();
  });
});
