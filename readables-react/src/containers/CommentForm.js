import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import faker from 'faker'

// Actions
import { addNewComment } from '../actions/comments'

// Utils
import * as ReadablesAPI from '../utils/ReadablesAPI'

class CommentForm extends Component {

    onSubmit = (values) => {

        const data = {

            author: values.author,
            body: values.body,
            deleted: false,
            parentId: this.props.parentId,
            id: faker.random.uuid(),
            timestamp: Date.now()

        }

        this.props.addNewComment(data)
        this.props.reset()
	}

    render() {  
  
        const { handleSubmit, pristine, submitting } = this.props
    
        return (
            
            <div className='form-container' >

                <h1> Add a comment: </h1>

                <form className='post-form' onSubmit={handleSubmit(this.onSubmit)}>
                 

                 
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
                   
                    
                    
                    
                        <label className='label' >Message</label>
                        <div>
                            <Field 
                                name="body" 
                                component="textarea"
                                className='text-area' 
                            />
                        </div>
                    

                    <div className='form-buttons field' >
                        
                        <Button 
                            type="submit" 
                            disabled={pristine || submitting }
                            positive
                        >
                           Post
                        </Button>
                        
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
    addNewComment(values) {
        ReadablesAPI.addComment(values)
            .then(() => {
                dispatch(addNewComment(ownProps.parentId, values))
         
    })},
});

CommentForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm);

export default reduxForm({
  form: 'CommentForm' // a unique identifier for this form
})(CommentForm)