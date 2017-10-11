import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'    
import { Button } from 'semantic-ui-react'

import { updateComment, controlEditCommentForm } from '../actions/comments'

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
        <input className='field' {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className='error' >{error}</span>) ||
            (warning && <span className='warning' >{warning}</span>))}
      </div>
  
)

const renderTextAreaField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    
      <div>
        <textarea className='text-area' {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className='error' >{error}</span>) ||
            (warning && <span className='warning' >{warning}</span>))}
      </div>
    
)


class CommentEdit extends Component {

    componentDidMount = () => {
        
        if (this.props.comment) {
            this.handleInitialize()
        }

    }

    handleInitialize = () => {
        
        const initData = {
          author: this.props.comment.author,
          body: this.props.comment.body,
        };
    
        this.props.initialize(initData);
      }

    onSubmit = (values) => {
        
        const data = {
            author: values.author,
            body: values.body,  
        }
        
        this.props.updateComment(data)
        this.props.stopEditingComment()
          
    }



    render() {

        const {  handleSubmit, pristine, submitting } = this.props

        return(
            <div className="comment-in-list">
            
                    <form className='comment-edit-form' onSubmit={handleSubmit(this.onSubmit)}>
                        
                        <Field
                            name="author"
                            component={renderField}
                            type="text"
                            label='Username'
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
            
                                
                            <button type="button" >
                                Cancel
                            </button>
                            
            
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
	updateComment: values => {
        ReadablesAPI.updateCommentById(ownProps.comment.id, values.body, values.author)
            .then(() => {
                dispatch(updateComment(ownProps.comment.id, 
                    ownProps.comment.parentId,
                    values.body,
                    values.author
                ))     
    })},

    stopEditingComment: () => {
        dispatch(controlEditCommentForm('id', '0'))
    }
})

CommentEdit = connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentEdit);

export default reduxForm({
	form: 'CommentEditForm' // a unique identifier for this form
})(CommentEdit)

    