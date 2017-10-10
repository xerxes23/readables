import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

// Utils
import { showDate } from '../utils/utils.js'

// Components
import CommentVoteScore from '../containers/CommentVoteScore'


const Comment = (props) => {

	const { comment } = props
	const { voteScore, timestamp, body, author } = props.comment
	return (
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
						<Button compact positive className="edit-button" >
							<Icon size='large' name='edit' />
						</Button>
						<Button compact negative className="delete-button">
							<Icon size='large' name='trash outline' />
						</Button>
					</div>
				</div>	
						
				<blockquote className="comment-body">{ body }</blockquote> 

			</div>		
			
		
		</div>
	)
}

export default Comment