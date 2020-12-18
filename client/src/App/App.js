import React from 'react';
import { NewItemForm } from '../NewItemForm';

import { ToDoList } from '../ToDoList';

export const App = () => (
  <div>
    <NewItemForm className={"new-item-form"}/>
    <ToDoList />
  </div>
);

