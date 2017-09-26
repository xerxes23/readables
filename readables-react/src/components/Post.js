import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import VoteScore from './VoteScore'
import { Button, Icon, Label } from 'semantic-ui-react'
import CommentList from './CommentList'

import { showDate } from '../utils/utils.js'

class Post extends Component {

    

    render() {
        const { comments } = this.props
        const { voteScore, title, body, author, timestamp, category } = this.props.post
       
        return (
            <div className="post-view" > 
                < VoteScore voteScore={voteScore}/>

                <div className="main-content" >
                    <h1>{title}</h1>
                   
                    <blockquote className="post-body" >  
                        {body}
                    </blockquote>
                   
                    <div className="meta-data" > 
                        
                        <h3> 
                            <Icon name='user circle outline' />
                            {author}
                            &nbsp; · &nbsp;

                            <Icon name='clock' />
                            <small> {showDate(timestamp)} </small>
                            &nbsp; · &nbsp;

                            <small>Category:</small>
                            <Label className="category-tag" horizontal> 
                                <Link to={`/category/${category}`} > {category} </Link> 
                            </Label>
                       
                        </h3>

                        

                        <div className="buttons" > 
                            <Button compact className="edit-button" >
                                <Icon inverted color='blue' size='large' name='edit' />
                                edit
                            </Button>
                            <Button compact className="delete-button">
                                <Icon inverted color='red' size='large' name='trash outline' />
                                delete
                            </Button>
                        </div>  

                    </div>

                    < CommentList comments={comments} />

                </div>
                

            </div>
        );
    }
}

export default Post
