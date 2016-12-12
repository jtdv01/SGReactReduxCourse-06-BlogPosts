import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    return(
      <div>I am an index route</div>
    );
  }
}

export default connect(null,{ fetchPosts })(PostsIndex);
