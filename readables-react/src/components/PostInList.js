
// Libs
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label } from 'semantic-ui-react'

// Utils
import * as ReadablesAPI from '../utils/ReadablesAPI'
import { showDate } from '../utils/utils.js'


// Components
import VoteScore from './VoteScore'

class PostInList extends Component {
	
	state={
		comments: [],
	}

	componentDidMount = () => {
		ReadablesAPI.getCommentsByPostId(this.props.post.id).then(data => {
			this.setState({ comments: data })
	  })
	}


	render() {

		const { voteScore, id, author, timestamp, title, category } = this.props.post
		
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
							{this.state.comments.length} Comments
						
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

export default PostInList