
import React, { Component } from 'react'
import { Button, Select, TextArea, Form, Input } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

// Components
import Comment from './Comment'


class CommentList extends Component {

    render() {
    
        const { comments } = this.props

        const sortOptions = [{ key: 'date', value: 'date', text: 'Date' },
        { key: 'votes', value: 'votes', text: 'Votes' }];

        const commentNumber = comments? comments.length === 1? `1 comment`: `${comments.length} comments`:'loading'
        
       

        return (
            <div className="container" >
               
                <div className="comment-list-controls" >
                    <h1 className="comment-count" > {commentNumber} </h1>
                    <Select compact className="sort-selector" placeholder='Sort By' options={sortOptions} />
                </div>  

                <div className="comment-list" >
                    
                    {
                        comments.map( (comment, index) => ( 
                            < Comment  key={index} comment={comment}/>
                        ))
                    }    

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
