import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { applyVote } from '../actions/posts'
import * as ReadablesAPI from '../utils/ReadablesAPI'

class VoteScore extends Component {

    render() {
        const { voteScore } = this.props;

        return (
            <div className="votes">

				<div className="vote-count">
				<h1>{voteScore}</h1>
				</div>

				<div className="voting-buttons">
					
					
					<Button 
						onClick={() => this.props.applyVote(voteScore, 1)} 
						className="up-vote-button" 
						compact 
						icon
					>
						<Icon color='blue' size='large' name='thumbs outline up' />
					</Button>
					
					
					<Button 
						onClick={() => this.props.applyVote(voteScore, -1)} 
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
	  applyVote: (newValue, diff) => {
		ReadablesAPI.votePost(ownProps.id, diff)
		dispatch(applyVote(ownProps.id, newValue + diff))
	  }
	}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(VoteScore)