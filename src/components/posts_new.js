import React, { Component } from 'react';
// identical to connect function
import { reduxForm } from 'redux-form';
import { createPost, fetchPosts } from '../actions/index';
import { bindActionCreators } from 'react-redux';


class PostsNewForm extends Component{
    componentWillMount(){

      // this.props.createPost();
    }
    render(){
      // Acts like how the connect function gives access to props
      const { fields: {title, categories, content}, handleSubmit } = this.props;
      return(
        <form onSubmit={handleSubmit(this.props.createPost)}>
          <h3>Create Form </h3>

          <div className="form-group">
            <label> Title </label>
            <input type="text" className="form-control" {...title} />
          </div>

          <div className="form-group">
            <label> Categories </label>
            <input type="text" className="form-control" {...categories} />
          </div>

          <div className="form-group">
            <label> Content </label>
            <input type="text" className="form-control" {...content} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
    }
}

/**
connect:
1: mapStateToProps
2: mapDistpatch

reduxForm
1: formConfig
2: mapStateToProps
3: mapDistpatchToProps


State:
form:{
  PostsNewForm:{
    title:.... categories:...
}
}
}
***/

// function mapDispatchToProps(dispatch) {
//   return { createPost: bindActionCreators(createPost, dispatch) }
// }

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title','categories','content']
},null, {createPost: createPost})(PostsNewForm);
