import React from 'react';
import { shallow } from 'enzyme';
import { ToDoList } from './ToDoList.js';

describe('ToDoList', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToDoList />);
  });

  it('is a table', () => {
    const type = wrapper.type();
    expect(type).toEqual('table');
  });

  it('has "list-table" class', () => {
    expect(wrapper.hasClass('list-table')).toBeTruthy();
  });


  it('does not start with any list item', () => {
    expect(wrapper.contains(
      <li className="to-do-item">Buy peacock feathers</li>
    )).toBeFalsy();
  });

});
