// Libs
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label } from 'semantic-ui-react'

// Utils
import { showDate } from '../utils/utils.js'

// Components
import VoteScore from './VoteScore'






const Comment = (props) => (
	<div className="comment-in-list">
		
			
		< VoteScore voteScore={4} />


		<div className="comment-content">	
			
			<div className="meta-data">
				<h4 className="data"> 
					Author
					&nbsp; · &nbsp;
					<small>28 Jun 2016 22:21</small>
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
					
			<blockquote className="comment-body">Body</blockquote> 

		</div>		
		
	
	</div>
)

export default Comment