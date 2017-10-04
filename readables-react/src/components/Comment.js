import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

// Utils
import { showDate } from '../utils/utils.js'

// Components
import CommentVoteScore from './CommentVoteScore'


const Comment = (props) => (
	<div className="comment-in-list">
	
		< CommentVoteScore comment={props.comment} voteScore={props.comment.voteScore} />

		
		<div className="comment-content">	
			
			
			<div className="meta-data">
				<h4 className="data"> 
					{props.comment.author}
					&nbsp; · &nbsp;
					<small>{showDate(props.comment.timestamp)}</small>
				</h4>
				<div className="buttons">
					<Button compact positive className="edit-button" >
						<Icon size='large' name='edit' />
					</Button>
					<Button compact negative className="delete-button">
						<Icon size='large' name='trash outline' />
					</Button>
				</div>
			</div>	
					
			<blockquote className="comment-body">{ props.comment.body }</blockquote> 

		</div>		
		
	
	</div>
)

export default Comment