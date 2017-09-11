// Libs
import React, { Component } from 'react'
import { Button, Icon, Select, TextArea, Form, Input } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

// Components
import Comment from './Comment'

const objectToArray = obj => {
    if (obj) return Object.keys(obj).map(key => obj[key])
    else return []
  }

class CommentList extends Component {

    render() {

        const sortOptions = [{ key: 'date', value: 'date', text: 'Date' },
        { key: 'votes', value: 'votes', text: 'Votes' }];
        return (
            <div className="container" >
               
                <div className="comment-list-controls" >
                    <h1 className="comment-count" > 5 Posts </h1>
                    <Select className="sort-selector" placeholder='Sort By' options={sortOptions} />
                </div>  

                <div className="comment-list" >
                    
                    < Comment />
                    < Comment />
                    < Comment />

                </div>   

                <div className="new-comment-input" >
                    <h2> Add a comment: </h2>
                    <Form>
                        <Form.Field control={Input} placeholder='Username' />
                        
                        <TextArea placeholder='Comment away!' />
                        
                        <Button positive floated='right' className="post-button" type='submit'>Post Comment</Button>
                    </Form>
                    

                </div>  
            </div>
        );
    }
}

export default CommentList;
