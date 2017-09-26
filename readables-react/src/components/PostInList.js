
// Libs
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


import { setPostComments } from '../actions/comments'

// Utils
import * as ReadablesAPI from '../utils/ReadablesAPI'
import { showDate } from '../utils/utils.js'


// Components
import VoteScore from './VoteScore'

class PostInList extends Component {
	
	/* state={
		comments: [],
	}

	componentDidMount = () => {
		ReadablesAPI.getCommentsByPostId(this.props.post.id).then(data => {
			this.setState({ comments: data })
	  })
	}
 */

	componentDidMount = () => {
		this.props.setPostComments()
	}	


	render() {

		const { voteScore, id, author, timestamp, title, category } = this.props.post
		
		const { comments } = this.props

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
					
						<Link to={`/post/${id}`} className="title">{title}</Link> 
					
						<div>
						
							<Link to={`/category/${category}`}>
								<Label className="category-tag" horizontal>{category}</Label>
							</Link>


							<Icon name='comment outline' />
							{postComments.length} Comments
						
						</div>
					
					</div> {/* End of post-content div */}

				</article>

				<div className="button-container">
					<Button compact  positive className="edit-button" >
						<Icon name='edit' />
						edit
					</Button>
					<Button compact negative className="delete-button">
						<Icon name='trash outline' />
						delete
					</Button>
				</div>
			
			</div>
		)
	};
}

function mapStateToProps(state, props) {
	return {
	  comments: state.comments,
	}
  }
  
  function mapDispatchToProps(dispatch, ownProps) {
	return {
	  setPostComments: () => {
		ReadablesAPI.getCommentsByPostId(ownProps.post.id).then(comments => {
		  dispatch(setPostComments(ownProps.post.id, comments))
		})
	  }
	}
  }
  

  export default withRouter((connect(mapStateToProps, mapDispatchToProps)(PostInList)))