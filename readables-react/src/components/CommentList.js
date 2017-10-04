
import React, { Component } from 'react'
import { Button, TextArea, Form, Input, Loader } from 'semantic-ui-react'
import { sortByDate, sortByScore } from '../utils/utils'
import { connect } from 'react-redux'

import { updateCommentSortMethod } from '../actions/comments'

// Components
import Comment from './Comment'


class CommentList extends Component {

    render() {
    
        const { comments, commentSortMethod, updateCommentSortMethod } = this.props

        if (comments) {
            commentSortMethod === 'date' ? comments.sort(sortByDate) : comments.sort(sortByScore)
        }

        const commentNumber = comments? comments.length === 1? `1 comment`: `${comments.length} comments`:'loading'
        
       

        return (
            <div className="container" >
               
                <div className="comment-list-controls" >
                    <h1 className="comment-count" > {commentNumber} </h1>
                    <select
                        value={commentSortMethod}
                        onChange={event => {updateCommentSortMethod(event.target.value)}}
                    >
                        <option value="score">Top Score</option>
                        <option value="date">Most recent</option>
                    </select>
                </div>  

                <div className="comment-list" >
                    
                    {   comments ?
                        comments.map( (comment, index) => ( 
                            < Comment  key={index} comment={comment} />
                        )) : <div className='loader' > <Loader size='large' active /> </div>
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


function mapStateToProps (state, props) {
    return {
      commentSortMethod: state.commentSortMethod
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        updateCommentSortMethod: newSortMethod => {
            dispatch(updateCommentSortMethod(newSortMethod))
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (CommentList);