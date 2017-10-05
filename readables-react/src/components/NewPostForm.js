import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import faker from 'faker'

// Actions
import { setPosts, postsAreLoading, addNewPost } from '../actions/posts'

// Utils
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

        this.props.addNewPost(data)
        this.props.getAllPosts()
        
	}

    render() {  
  
        const { handleSubmit, pristine, submitting } = this.props
    
        return (
            
            <div className='form-container' >

                <h1> Add New Post </h1>

                <form className='post-form' onSubmit={handleSubmit(this.onSubmit)}>
                    <div  >
                        <label className='label' >Post Title</label>
                        <div>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder=" Post Title"
                                className='field'
                            />
                        </div>
                    </div>

                    <div >
                        <label className='label' >Username</label>
                        <div>
                            <Field
                                name="author"
                                component="input"
                                type="text"
                                placeholder=" Username"
                                className='field'
                            />
                        </div>
                    </div>
                    
                    
                    <div >
                        <label className='label' >Category</label>
                        
                        <div>
                            <Field 
                                name="category" 
                                component="select"
                                className='field'
                            >
                                <option >Select one</option>    
                                <option value="react">React</option>
                                <option value="redux">Redux</option>
                                <option value="udacity">Udacity</option>
                            </Field>
                        </div>
                    </div>


                    
                    <div >
                        <label className='label' >Message</label>
                        <div>
                            <Field 
                                name="body" 
                                component="textarea"
                                className='text-area' 
                            />
                        </div>
                    </div>

                    <div className='form-buttons field' >
                        
                        <Button positive type="submit" disabled={pristine || submitting}>
                            Submit
                        </Button>
                        
                        <Link to='/' >  
                            <Button negative type="button" >
                                Cancel
                            </Button>
                        </Link>

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

NewPostForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPostForm);

export default reduxForm({
  form: 'newPostForm' // a unique identifier for this form
})(NewPostForm)