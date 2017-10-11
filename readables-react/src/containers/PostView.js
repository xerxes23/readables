import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import Post from './Post'
import { connect } from 'react-redux'
import NotFound from '../components/NotFound'

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
                    post
                    ? 
                    <Post post={post} comments={comments} history={history} />
                    : 
                    <Loader/>
                }    

            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    comments: state.comments[ownProps.postId]
})
  
const mapDispatchToProps = (dispatch, ownProps ) => ({
//...
})


export default connect(mapStateToProps, mapDispatchToProps)(PostView)
