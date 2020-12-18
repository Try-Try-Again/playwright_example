import React from 'react';
import { shallow } from 'enzyme';
import { ToDoList } from './ToDoList.js';

describe('ToDoList', () => {

  it('is a table', () => {
    const wrapper = shallow(<ToDoList />);
    const type = wrapper.type();
    expect(type).toEqual('table');
  });

  it('', () => {
    const wrapper = shallow(<ToDoList />);
    expect(wrapper.hasClass('list-table')).toBeTruthy();
  });

});
