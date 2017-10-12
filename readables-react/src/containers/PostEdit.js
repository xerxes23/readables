import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


import { setPosts, postsAreLoading, updatePost } from '../actions/posts'

//Utils
import * as ReadablesAPI from '../utils/ReadablesAPI'

const required = value => (value ? undefined : 'Required')

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
                    
                   
                    <Field
                        name="title"
                        component={renderField}
                        type="text"
                        label='Post Title'
                        validate={required}
                    />
                     


                  
                    <Field 
                        name="body" 
                        component={renderTextAreaField}
                        label='Message'
                        validate={required}
                    />
                       

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
    updatePost(values) {
        ReadablesAPI.editPostById(ownProps.postId, values)
            .then(() => {
                dispatch(updatePost(values))
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

PostEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEdit);

export default reduxForm({
  form: 'EditForm' // a unique identifier for this form
})(PostEdit)