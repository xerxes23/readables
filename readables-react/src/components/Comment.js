import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label } from 'semantic-ui-react'
import VoteScore from './VoteScore'


const showDate = timestamp => {
	var a = new Date(timestamp)
	var months = [
	  'Jan',
	  'Feb',
	  'Mar',
	  'Apr',
	  'May',
	  'Jun',
	  'Jul',
	  'Aug',
	  'Sep',
	  'Oct',
	  'Nov',
	  'Dec'
	]
	var year = a.getFullYear()
	var month = months[a.getMonth()]
	var date = a.getDate()
	var hour = a.getHours()
	hour = ('00' + hour).slice(-2)
	var min = a.getMinutes()
	min = ('00' + min).slice(-2)
	// var sec = a.getSeconds();
	// sec = ('00'+sec).slice(-2);
	var time =
	  date + ' ' + month + ' ' + year + ' ' + hour + ':' + min /*+ ':' + sec */
	return time
  }



const Comment = (props) => (
	<div className="comment-in-list">
		
			
		< VoteScore voteScore={4} />


		<div className="comment-content">	
			
			<div className="meta-data">
				<h3 className="author"> 
					<Icon name='user circle outline' />
					Author
					&nbsp; · &nbsp;
					<Icon name='clock' />
					<small>Date</small>
					&nbsp; · &nbsp;
				</h3>
				<div className="buttons">
					<Button positive className="edit-button" >
						<Icon name='edit' />
						edit
					</Button>
					<Button negative className="delete-button">
						<Icon name='trash outline' />
						delete
					</Button>
				</div>
			</div>	
					
			<blockquote className="comment-body">Body</blockquote> 

		</div>		
		
	
	</div>
)

export default Comment