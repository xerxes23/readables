
// Libs
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label } from 'semantic-ui-react'

// Utils
import { showDate } from '../utils/utils.js'

// Components
import VoteScore from './VoteScore'

const PostInList = (props) => (
	
	<div className="post-in-list">
		
		<article className="media">
			
			< VoteScore voteScore={props.post.voteScore} />

			<div className="post-content">
				
				<h3 className="author"> 
					<Icon size='small' name='user circle outline' />
					{props.post.author}
					&nbsp; · &nbsp;
					<Icon size='small' name='clock' />
					<small>{showDate(props.post.timestamp)}</small>
				</h3>
			
				<Link to="/post" className="title">{props.post.title}</Link> 
			
				<div>
				
					<Link to={`/category/${props.post.category}`}>
						<Label className="category-tag" horizontal>{props.post.category}</Label>
					</Link>


					<Icon name='comment outline' />
					0 Comments
				
				</div>
			
			</div> {/* End of post-content div */}

		</article>

		<div className="button-container">
			<Button compact positive className="edit-button" >
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

export default PostInList