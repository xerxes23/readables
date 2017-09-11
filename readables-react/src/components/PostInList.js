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



const PostInList = (props) => (
	<div className="post-in-list">
		<article className="media">
			
			< VoteScore voteScore={props.post.voteScore} />

			<div className="post-content">
				
				<h3 className="author"> 
					<Icon name='user circle outline' />
					{props.post.author}
					&nbsp; · &nbsp;
					<Icon name='clock' />
					<small>{showDate(props.post.timestamp)}</small>
				</h3>
				<Link to="/post" className="title">{props.post.title}</Link> 
				<div>
				<Label className="category-tag" horizontal><a>{props.post.category}</a></Label>
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