import React, { Component }from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

// Utils
import { showDate } from '../utils/utils.js'
import * as ReadablesAPI from '../utils/ReadablesAPI'

// Components
import CommentVoteScore from '../containers/CommentVoteScore'
import CommentEdit from './CommentEdit'

import { controlEditCommentForm, setPostComments } from '../actions/comments'


class Comment extends Component {


	render() {

		const { comment, commentToEdit, handleSubmit, pristine, submitting, startEditingThisComment } = this.props
		const { voteScore, timestamp, body, author } = this.props.comment

		return (
			<div>
			
			{ commentToEdit.id !== comment.id &&

				<div className="comment-in-list">
					
					< CommentVoteScore comment={comment} voteScore={voteScore} />
					
					<div className="comment-content">	
						
						
						<div className="meta-data">
							<h4 className="data"> 
								{author}
								&nbsp; · &nbsp;
								<small>{showDate(timestamp)}</small>
							</h4>
							<div className="buttons">
								<Button
									compact 
									positive 
									className="edit-button"
									onClick={() => startEditingThisComment()} 
								>
									<Icon size='large' name='edit' />
								</Button>

								<Button 
									compact 
									negative 
									className="delete-button"
									onClick={this.props.deleteComment}
								>
									<Icon size='large' name='trash outline' />
								</Button>
							</div>
						</div>	
								
						<blockquote className="comment-body">{ body }</blockquote> 

					</div>
				</div>
				 
			}

			{ commentToEdit.id === comment.id &&
			  
				<CommentEdit comment={comment} />
            	
			}

			</div>
		)
	}
}


const mapStateToProps = (state, ownProps) => ({
	//..
})
	
	
const mapDispatchToProps = (dispatch, ownProps)  => ({
	startEditingThisComment: () => {
		dispatch(controlEditCommentForm('id', ownProps.comment.id))
	},
	deleteComment: () => {
		ReadablesAPI.deleteCommentById(ownProps.comment.id).then(() => {
		  ReadablesAPI.getCommentsByPostId(ownProps.comment.parentId).then( (comments) => {
			dispatch(setPostComments(ownProps.comment.parentId, comments))
		  })
		})
	  },
	
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Comment);





