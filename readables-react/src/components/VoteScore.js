import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

class VoteScore extends Component {

    render() {
        const { voteScore } = this.props;

        return (
            <div className="votes">

				<div className="vote-count">
				<h1>{voteScore}</h1>
				</div>

				<div className="voting-buttons">
					<Button compact primary icon>
					<Icon name='thumbs outline up' />
					</Button>
					<Button compact negative icon>
					<Icon name='thumbs outline down' />
					</Button> 
				</div>

			</div>
        );
    }
}

export default VoteScore
