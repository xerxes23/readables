import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import faker from 'faker'

import { setPosts, postsAreLoading, addNewPost } from '../actions/posts'

//Utils
import * as ReadablesAPI from '../utils/ReadablesAPI'

class NewPostForm extends Component {

    onSubmit = (values) => {

        const data = {
            title: values.title,
            category: values.category,
            author: values.author,
            body: values.body,
            deleted: false,
            id: faker.random.uuid(),
            timestamp: Date.now()
        }
        console.log(data)
        this.props.addNewPost(data)
        this.props.getAllPosts()
	}

    render() {  
  
        const { handleSubmit, pristine, reset, submitting } = this.props
    
        return (
            
            <div className='form-container' >

                <h1> Add New Post </h1>

                <form className='post-form' onSubmit={handleSubmit(this.onSubmit)}>
                    <div className='field' >
                        <label className='label' >Post Title</label>
                        <div>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder="Post Title"
                            />
                        </div>
                    </div>

                    <div className='field' >
                        <label className='label' >Username</label>
                        <div>
                            <Field
                                name="author"
                                component="input"
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                    </div>
                    
                    
                    <div className='field'  >
                        <label className='label' >Category</label>
                        
                        <div>
                            <Field name="category" component="select">
                                <option >Select one</option>    
                                <option value="react">React</option>
                                <option value="redux">Redux</option>
                                <option value="udacity">Udacity</option>
                            </Field>
                        </div>
                    </div>


                    
                    <div className='field' >
                        <label className='label' >Message</label>
                        <div>
                            <Field name="body" component="textarea" />
                        </div>
                    </div>

                    <div className='form-buttons field' >
                        <button type="submit" disabled={pristine || submitting}>
                            Submit
                        </button>
                        
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // ...
});

const mapDispatchToProps = (dispatch, ownProps)  => ({
    addNewPost: values => {
        ReadablesAPI.addPost(values)
          .then(() => {
            dispatch(addNewPost(values)) 
    })},
    getAllPosts: () => {
        dispatch(postsAreLoading(true))
        ReadablesAPI.getAllPosts().then(posts => {
            dispatch(setPosts(posts))
            dispatch(postsAreLoading(false))
    })}
});

NewPostForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPostForm);

export default reduxForm({
  form: 'newPostForm' // a unique identifier for this form
})(NewPostForm)