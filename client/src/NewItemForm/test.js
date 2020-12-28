import React from 'react';
import { shallow } from 'enzyme';
import { NewItemForm } from './NewItemForm.js';
import { submitItem } from './submitItem.js';

describe('NewItemForm', () => {

  it('passes className as class', () => {
    const wrapper = shallow(<NewItemForm className={'foo'} />);
    expect(wrapper.hasClass('foo')).toBeTruthy();
  });

  it('is a form', () => {
    const wrapper = shallow(<NewItemForm />);
    const type = wrapper.type();
    expect(type).toEqual('form');
  });

  it('', () => {
    const wrapper = shallow(<NewItemForm />);
    const MockSubmitItem = jest.fn(submitItem);
    wrapper.simulate('submit');
    expect(MockSubmitItem).toHaveBeenCalled();
  });

});
