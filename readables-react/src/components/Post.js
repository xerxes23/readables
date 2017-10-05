
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import VoteScore from './VoteScore'
import { Button, Icon, Label } from 'semantic-ui-react'
import CommentList from './CommentList'
import PostDeleteModal from './PostDeleteModal'
import * as ReadablesAPI from '../utils/ReadablesAPI'

import { displayDeleteModal, setPostIdToDeleteModal } from '../actions/posts'
import {setPostComments } from '../actions/comments'
// Utils 
import { showDate, toTitleCase } from '../utils/utils.js'

class Post extends Component {

    componentDidMount = () => {
        this.props.setPostComments()
    }

    render() {
        const { comments, deletePostModal, history } = this.props
        const { voteScore, title, body, author, timestamp, category, id } = this.props.post
       
        return (
            <div className="post-view" > 
                < VoteScore voteScore={voteScore} id={id}/>

                <div className="main-content" >
                    <h1>{title}</h1>
                   
                    <blockquote className="post-body" >  
                        {body}
                    </blockquote>
                   
                    <div className="meta-data" > 
                        
                        <h3> 
                            <Icon name='user circle outline' />
                            {author}
                            &nbsp; · &nbsp;

                            <Icon name='clock' />
                            <small> {showDate(timestamp)} </small>
                            &nbsp; · &nbsp;

                            <small>Category:</small>
                            <Label className="category-tag" horizontal> 
                                <Link to={`/category/${category}`} > {toTitleCase(category)} </Link> 
                            </Label>
                       
                        </h3>

                        

                        <div className="buttons" > 
                            <Link to={`/edit/${id}`} >
                                <Button compact className="edit-button" >
                                    <Icon inverted color='blue' size='large' name='edit' />
                                    edit
                                </Button>
                            </Link>
                            <Button 
                                compact 
                                className="delete-button"
                                onClick={() => {
                			        this.props.setPostIdToDeleteModal(id)
                			        this.props.displayDeleteModal(true)
              			        }}
                            >
                                <Icon inverted color='red' size='large' name='trash outline' />
                                delete
                            </Button>
                        </div>  

                    </div>

                    < CommentList comments={comments} parentId={id} />

                </div>
                
                <PostDeleteModal
                    deletePostModal={deletePostModal}
                    history={history}
                    redirectAfterDelete={true}
                />

            </div>
        );
    }
}

function mapStateToProps(state, props) {
	return {
	  deletePostModal: state.deletePostModal
	}
  }
  
function mapDispatchToProps(dispatch, ownProps) {
    return {
        setPostComments: () => {
                ReadablesAPI.getCommentsByPostId(ownProps.post.id).then(comments => {
                dispatch(setPostComments(ownProps.post.id, comments))
        })},
        
        displayDeleteModal: bool => {
            dispatch(displayDeleteModal(bool))
        },

        setPostIdToDeleteModal: postId => {
            dispatch(setPostIdToDeleteModal(postId))
        }
    }
}
  

  export default connect(mapStateToProps, mapDispatchToProps)(Post)
