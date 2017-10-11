
import React, { Component } from 'react'
import { Button, TextArea, Form, Input, Loader } from 'semantic-ui-react'
import { sortByDate, sortByScore } from '../utils/utils'
import { connect } from 'react-redux'

import { updateCommentSortMethod } from '../actions/comments'

// Components
import Comment from '../components/Comment'
import CommentForm from './CommentForm'

class CommentList extends Component {

    render() {
    
        const { comments, commentSortMethod, updateCommentSortMethod, parentId, commentToEdit } = this.props

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
                            < Comment  
                                key={index}
                                comment={comment} 
                                commentToEdit={commentToEdit} 
                                parentId={parentId}
                            />
                        )) : <div className='loader' > <Loader size='large' active /> </div>
                    }    

                </div>   

                <CommentForm parentId={parentId} />
  
            </div>
        );
    }
}


const mapStateToProps = (state, props) => ({
    commentSortMethod: state.commentSortMethod,
    commentToEdit: state.commentToEdit
})
 
const mapDispatchToProps = (dispatch, ownProps) => ({
    updateCommentSortMethod: newSortMethod => {
        dispatch(updateCommentSortMethod(newSortMethod))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (CommentList);