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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci rutrum, eleifend libero quis, tempor lorem. Ut vestibulum ultricies tellus, id scelerisque quam. Morbi id nunc dolor. Suspendisse risus metus, porttitor at placerat et, blandit non urna. Sed id mi odio. Etiam non justo ac tortor egestas efficitur. Donec semper suscipit condimentum. In blandit, magna vel efficitur posuere, augue velit faucibus ligula, in euismod ligula felis id tellus. Pellentesque quis tincidunt ipsum.              
                    </blockquote>
                   
                    <div className="meta-data" > 
                        
                        <h3> 
                        <Icon name='user circle outline' />
                        Author
                        &nbsp; · &nbsp;
                        <Icon name='clock' />
                        <small> DATE </small>
                        &nbsp; · &nbsp;
                        Category:
                        <Label className="category-tag" horizontal> <a> React </a> </Label>
                        &nbsp; · &nbsp;
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
