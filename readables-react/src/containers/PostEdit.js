import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


import { setPosts, postsAreLoading, updatePost } from '../actions/posts'

//Utils
import * as ReadablesAPI from '../utils/ReadablesAPI'

class PostEdit extends Component {


    componentDidMount = () => {
        
        if (this.props.post) {
            this.handleInitialize()
        }

    }

    handleInitialize = () => {
        
        const initData = {
          title: this.props.post.title,
          body: this.props.post.body,
        };
    
        this.props.initialize(initData);
      }

    onSubmit = (values) => {
        
        const data = {
            title: values.title,
            body: values.body,  
        }

        this.props.updatePost(data)
        this.props.getAllPosts()
                
    }
    

    render() {  
  
        const { handleSubmit, pristine, submitting } = this.props
    
        return (
            
            <div className='form-container' >

                <h1> Update Post </h1>

                <form className='post-form' onSubmit={handleSubmit(this.onSubmit)}>
                    <div >
                        <label className='label' >Post Title</label>
                        <div>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder="Post Title"
                                className='field'
                            />
                        </div>
                    </div>


                    <div>
                        <label className='label' >Message</label>
                        <div>
                            <Field 
                                name="body" 
                                component="textarea"
                                className='text-area field'
                            />
                        </div>
                    </div>

                    <div className='form-buttons field' >
                       
                        <Button positive type="submit" disabled={pristine || submitting}>
                            Update
                        </Button>

                        <Link to='/' >  
                            <button type="button" >
                                Cancel
                            </button>
                        </Link>

                    </div>

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
//...
})


const mapDispatchToProps = (dispatch, ownProps)  => ({
    updatePost: values => {
        ReadablesAPI.editPostById(ownProps.postId, values)
            .then(() => {
                dispatch(updatePost(values))
                ownProps.history.push('/')
         
    })},
    getAllPosts: () => {
        dispatch(postsAreLoading(true))
        ReadablesAPI.getAllPosts()
            .then(posts => {
                dispatch(setPosts(posts))
                dispatch(postsAreLoading(false))
    })}
});

PostEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEdit);

export default reduxForm({
  form: 'EditForm' // a unique identifier for this form
})(PostEdit)