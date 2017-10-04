import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import Post from './Post'
import { connect } from 'react-redux'

class PostView extends Component {
    

    render() {
        
        const { posts, postId, history, comments } = this.props
        
        let post = false
    
        if (posts) {
          post = posts.find(post => post.id === postId)
        }

        
        return (
            <div className="" > 

                {
                    post ? <Post post={post} comments={comments} history={history} /> : <Loader active />
                }    

            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
	return {
        comments: state.comments[ownProps.postId]
	}
  }
  
function mapDispatchToProps(dispatch, ownProps, state) {
    return {
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(PostView)
