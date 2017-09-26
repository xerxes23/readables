import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

import * as ReadablesAPI from '../utils/ReadablesAPI'

class VoteScore extends Component {

    render() {
        const { voteScore, id } = this.props;

        return (
            <div className="votes">

				<div className="vote-count">
				<h1>{voteScore}</h1>
				</div>

				<div className="voting-buttons">
					<Button onClick={() => ( ReadablesAPI.votePost(id, 1))} className="up-vote-button" compact icon>
					<Icon color='blue' size='large' name='thumbs outline up' />
					</Button>
					<Button onClick={() => ( ReadablesAPI.votePost(id, 0))} className="down-vote-button" compact icon>
					<Icon color='red' size='large' name='thumbs outline down' />
					</Button> 
				</div>

			</div>
        );
    }
}

export default VoteScore
