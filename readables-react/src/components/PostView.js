import React, { Component } from 'react'

import VoteScore from './VoteScore'
import { Button, Icon, Label, Loader } from 'semantic-ui-react'

import CommentList from './CommentList'
import Post from './Post'

import * as ReadablesAPI from '../utils/ReadablesAPI'

class PostView extends Component {

    state = {
        comments: []
    }

    componentDidMount = () => {
        
        ReadablesAPI.getCommentsByPostId(this.props.postId).then(data => {
            this.setState({ comments: data })
        })
    }
    

    render() {
        
        const { posts, postId } = this.props
        
        let post = false
    
        if (posts) {
          post = posts.find(post => post.id === postId)
        }

        
        return (
            <div className="" > 

                {
                    post ? <Post post={post} comments={this.state.comments} /> : <Loader active />
                }    

            </div>
        );
    }
}

export default PostView
