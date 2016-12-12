import { combineReducers } from 'redux';
import PostsReducers from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

// the key has to be form
const rootReducer = combineReducers({
  posts: PostsReducers,
  form: formReducer
});

export default rootReducer;
