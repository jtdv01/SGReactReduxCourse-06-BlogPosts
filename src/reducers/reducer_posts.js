import { FETCH_POSTS } from '../actions/index';

// list of posts and current post
const INITIAL_STATE = { all: [], post: null};

export default function(state=INITIAL_STATE,action){
  switch (action.type) {
    case FETCH_POSTS:
      // Keep previous state, but add a new all with the action payload data
      return {...state, all: action.payload.data}
    default:
      return state;
  }
}
