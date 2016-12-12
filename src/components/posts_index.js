import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
    // this.props.createPost();
  }

  render(){
    return(
      <div>
        <Link to="/posts/new" className="btn btn-primary">
          Add a post
        </Link>
      </div>
    );
  }
}

export default connect(null,{ fetchPosts, createPost })(PostsIndex);
