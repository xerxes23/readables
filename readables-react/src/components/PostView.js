import React, { Component } from 'react'
import VoteScore from './VoteScore'
import { Button, Icon, Label } from 'semantic-ui-react'
import CommentList from './CommentList'


class PostView extends Component {

    render() {
    

        return (
            <div className="post-view" >
                < VoteScore voteScore={6}/>

                <div className="main-content" >
                    <h1>Title to be decided</h1>
                   
                    <blockquote className="post-body" >  
                        Lorem ipsum dolor sit semper suscipit condimentum.entesque quis tincidunt ipsum.              
                    </blockquote>
                   
                    <div className="meta-data" > 
                        
                        <h3> 
                        <Icon name='user circle outline' />
                        author
                        &nbsp; · &nbsp;
                        <Icon name='clock' />
                        <small> 28 Jun 2016 22:21 </small>
                        &nbsp; · &nbsp;
                        <small>Category:</small>
                        <Label className="category-tag" horizontal> <a> React </a> </Label>
                       
                        </h3>

                        

                        <div className="buttons" > 
                            <Button positive className="edit-button" >
                                <Icon name='edit' />
                                edit
                            </Button>
                            <Button negative className="delete-button">
                                <Icon name='trash outline' />
                                delete
                            </Button>
                        </div>  

                    </div>

                    < CommentList />

                </div>
                

            </div>
        );
    }
}

export default PostView
