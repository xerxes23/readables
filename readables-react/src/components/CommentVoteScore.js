import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { applyVoteToComment } from '../actions/comments'
import * as ReadablesAPI from '../utils/ReadablesAPI'

class CommentVoteScore extends Component {

    render() {
        const { voteScore } = this.props;

        return (
            <div className="votes">

				<div className="vote-count">
				<h1>{voteScore}</h1>
				</div>

				<div className="voting-buttons">
					
					
					<Button 
						onClick={() => this.props.applyVoteToComment(voteScore, 1)} 
						className="up-vote-button" 
						compact 
						icon
					>
						<Icon color='blue' size='large' name='thumbs outline up' />
					</Button>
					
					
					<Button 
						onClick={() => this.props.applyVoteToComment(voteScore, -1)} 
						className="down-vote-button" 
						compact 
						icon>
					<Icon color='red' size='large' name='thumbs outline down' />
					</Button> 
				</div>

			</div>
        );
    }
}

function mapStateToProps(state, props) {
	return {
	}
  }
  
  function mapDispatchToProps(dispatch, ownProps, state) {
	return {
	  applyVoteToComment: (newValue, diff) => {
		ReadablesAPI.voteComment(ownProps.comment.id, diff)
		dispatch(applyVoteToComment(
            ownProps.comment.id,
            ownProps.comment.parentId,
            newValue + diff
          ))
	  }
	}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentVoteScore)