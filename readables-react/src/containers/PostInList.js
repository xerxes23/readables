import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PostDeleteModal from './PostDeleteModal'

// Actions
import { setPostComments } from '../actions/comments'
import { displayDeleteModal, setPostIdToDeleteModal } from '../actions/posts'

// Utils
import * as ReadablesAPI from '../utils/ReadablesAPI'
import { showDate, toTitleCase } from '../utils/utils.js'


// Components
import VoteScore from './VoteScore'

class PostInList extends Component {
	

	componentDidMount = () => {
		this.props.setPostComments()
	}	


	render() {

		const { voteScore, id, author, timestamp, title, category } = this.props.post

		const { comments, history, deletePostModal, setPostIdToDeleteModal, displayDeleteModal } = this.props

		let postComments = false
		if (comments) {
		  if (comments[id]) {
			postComments = comments[id].filter(
			  comment => comment.deleted === false
			)
		  }
		}


		return (
			<div className="post-in-list">
				
				<article className="media">
					
					< VoteScore voteScore={voteScore} id={id} />

					<div className="post-content">
						
						<h3 className="author"> 
							<Icon size='small' name='user circle outline' />
							{author}
							&nbsp; · &nbsp;
							<Icon size='small' name='clock' />
							<small>{showDate(timestamp)}</small>
						</h3>
					
						<Link to={`/${category}/${id}`} className="title">{title}</Link> 
					
						<div>
						
							<Link to={`/${category}`}>
								{category?
									<Label className="category-tag" horizontal>{toTitleCase(category)}</Label>
									: <Loader active />
								}
							</Link>


							<Icon name='comment outline' />
							{postComments.length} Comments
						
						</div>
					
					</div> {/* End of post-content div */}

				</article>

				<div className="button-container">
					<Link to={`/edit/${id}`} >
						<Button compact  positive className="edit-button" >
							<Icon name='edit' />
							edit
						</Button>
					</Link>
					<Button 
						compact 
						negative 
						className="delete-button"
						onClick={() => {
                			setPostIdToDeleteModal(id)
                			displayDeleteModal(true)
              			}}
					>

						<Icon name='trash outline' />
						delete
					</Button>
				</div>
				
				<PostDeleteModal deletePostModal={deletePostModal} history={history} />
			
			</div>
		)
	};
}

const mapStateToProps = (state, ownProps) => ({
	  comments: state.comments,
	  deletePostModal: state.deletePostModal
})
  
const mapDispatchToProps = (dispatch, ownProps) => ({
	setPostComments() {
			ReadablesAPI.getCommentsByPostId(ownProps.post.id).then(comments => {
			dispatch(setPostComments(ownProps.post.id, comments))
	})},
	displayDeleteModal(bool) {
		dispatch(displayDeleteModal(bool))
	},
	setPostIdToDeleteModal(postId) {
		dispatch(setPostIdToDeleteModal(postId))
	}
})
  

  export default connect(mapStateToProps, mapDispatchToProps)(PostInList)