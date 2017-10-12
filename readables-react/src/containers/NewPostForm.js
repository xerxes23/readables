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

const required = value => (value ? undefined : 'Required')

const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
    <div >
      <label className='label' >{label}</label>
      <div className='field'>
        <select {...input}>
          {children}
        </select>
        {touched && error && <span className='error' >{error}</span>}
      </div>
    </div>
)
  
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label className='label' >{label}</label>
      <div>
        <input className='field' {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className='error' >{error}</span>) ||
            (warning && <span className='warning' >{warning}</span>))}
      </div>
    </div>
  )

const renderTextAreaField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label className='label' >{label}</label>
      <div>
        <textarea className='text-area' {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className='error' >{error}</span>) ||
            (warning && <span className='warning' >{warning}</span>))}
      </div>
    </div>
)

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
                    
                    <Field
                        name="title"
                        component={renderField}
                        type="text"
                        label='Post Title'
                        validate={required}
                    />
                      
    
                    <Field
                        name="author"
                        component={renderField}
                        type="text"
                        label='Username'
                        validate={required} 
                    />
                    
                    
                    
                    <Field 
                        name="category" 
                        type="text" 
                        component={renderSelectField} 
                        label="Category"
                        validate={required}
                    >
                        <option> Select One</option>    
                        <option value="react">React</option>
                        <option value="redux">Redux</option>
                        <option value="udacity">Udacity</option>
                    </Field>

                    
                
                    <Field 
                        name="body" 
                        component={renderTextAreaField} 
                        label='Message'
                        validate={required}
                    />
                        
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
    addNewPost(values) {
        ReadablesAPI.addPost(values)
            .then(() => {
                dispatch(addNewPost(values))
                ownProps.history.push('/')
         
    })},
    getAllPosts() {
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