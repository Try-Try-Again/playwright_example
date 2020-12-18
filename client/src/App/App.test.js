import React from 'react';
// import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { NewItemForm } from '../NewItemForm';
import { ToDoList } from '../ToDoList';

import { App } from './App.js';


describe('App', () => {

  it('contains one NewItemForm component', () => {
    const wrapper = shallow(<App />);
    const formList = wrapper.find(NewItemForm);
    expect(formList).toHaveLength(1);
  });

  it('contains a item with className "new-item-form"', () => {
    const wrapper = shallow(<App />);
    const formList = wrapper.find('.new-item-form');
    expect(formList).toHaveLength(1);
  });

  it('', () => {
    const wrapper = shallow(<App />);
    const listList = wrapper.find(ToDoList);
    expect(listList).toHaveLength(1);
  });
});
