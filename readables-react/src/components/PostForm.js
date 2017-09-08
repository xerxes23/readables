import React, { Component } from 'react'
import { Button, Form, Input, Select, TextArea } from 'semantic-ui-react'


class PostForm extends Component {
    
    render() {
        const options = [
            { key: 'react', text: 'React', value: 'react' },
            { key: 'redux', text: 'Redux', value: 'redux' },
            { key: 'start-ups', text: 'Start Ups', value: 'start-ups' }
          ]
        return (
            <div className="form-container" >
                <h1> Add New Post </h1>
                <Form className="post-form" >    
                    <Form.Field control={Input} label='Post Title' placeholder='Post title' />
                    <Form.Field control={Input} label='Username' placeholder='Username' />
                    <Form.Field control={Select} label='Category' options={options} placeholder='Category' width={5}  />
                    <Form.Field control={TextArea} label='Message' placeholder='Message...'   />
                
                    <Form.Group inline className="form-buttons" >
                        <Form.Field  negative control={Button}>Cancel</Form.Field>
                        <Form.Field  positive control={Button}>Submit</Form.Field>
                    </Form.Group>     
                </Form>
            </div>
        );
    }
}

export default PostForm
