import { combineReducers } from 'redux';
import posts from './posts';
import isDisplayPostForm from './isDisplayPostForm';
import isPostEditing from './isPostEditing';

const todoApp = combineReducers({
  posts,
  isDisplayPostForm,
  isPostEditing
})

export default todoApp;