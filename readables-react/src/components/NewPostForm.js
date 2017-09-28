import React from 'react'
import { Field, reduxForm } from 'redux-form'

const NewPostForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Post Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Post Title"
          />
        </div>
      </div>

      <div>
        <label>Username</label>
        <div>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Username"
          />
        </div>
      </div>
      
      
      <div>
        <label>Category</label>
        <div>
          <Field name="category" component="select">
            <option value="null">Select category</option>    
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
          </Field>
        </div>
      </div>


    
      <div>
        <label>Message</label>
        <div>
          <Field name="body" component="textarea" />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'newPostForm' // a unique identifier for this form
})(NewPostForm)