import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react' 
import { displayDeleteModal, deletePost } from '../actions/posts'
import * as ReadablesAPI from '../utils/ReadablesAPI'
import Modal from 'react-modal'


class PostDeleteModal extends Component {

	render() {

    const {
      deletePostModal,
      displayDeleteModal,
      deletePost
    } = this.props

		return (
        <Modal
          isOpen={deletePostModal.isActive}
          onRequestClose={() => displayDeleteModal(false)}
          contentLabel="No Overlay Click Modal"
		  
        >

        	<div className="">

				<h1 className="title">
				Are you sure?
				</h1>
				
				<p>
				Please confirm that you want to delete this post.
				<br />
				<i>(this action cannot be undone)</i>
				</p>

				<br />

				<Button 
					style={{marginRight:'12px'}} 
					onClick={() => displayDeleteModal(false)}
				>
					Cancel
				</Button>
				
				<Button
					onClick={() => {
						deletePost(deletePostModal.postId)
						displayDeleteModal(false)
					}}
					negative
				>
					Yes, I'm sure
				</Button>
          
			</div>
        
        </Modal>
		)
	}
}

function mapStateToProps(state, props) {
    return {
        deletePostModal: state.deletePostModal
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        displayDeleteModal: (bool) => {
            dispatch(displayDeleteModal(bool))
        },
        deletePost: (postIdToDelete) => {
            ReadablesAPI.deletePostById(postIdToDelete).then(() => dispatch(deletePost(postIdToDelete)))
            ownProps.history.push('/')
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(PostDeleteModal)