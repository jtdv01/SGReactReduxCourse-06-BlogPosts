import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
    // this.props.createPost();
  }

  renderPosts(){
    const posts = this.props.allPosts.map(x => <li key={x.id}> {x.id} - {x.title} - {x.categories} </li>);
    return (
      <ol>
        {posts}
      </ol>
    );
  }

  render(){
    return(
      <div>

        <h3>Current posts</h3>
        {this.renderPosts()}

        <Link to="/posts/new" className="btn btn-primary">
          Add a post
        </Link>

      </div>
    );
  }
}

function mapStateToProps(state){
  return(
    {
      allPosts: state.posts.all
    }
  );
}

export default connect(mapStateToProps,{ fetchPosts, createPost })(PostsIndex);
