import React, { Component } from 'react'
import { Button, Icon, Select } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PostInList from './PostInList'
import { sortByDate, sortByScore } from '../utils/utils'

class PostList extends Component {

    render() {
        

        const { posts, sortMethod } = this.props;

        sortMethod === 'date' ? posts.sort(sortByDate) : posts.sort(sortByScore)

        const postNumber = posts? posts.length === 1? `1 post`: `${posts.length} posts`: 'loading'

        const sortOptions = [{ key: 'date', value: 'date', text: 'Date' },
        { key: 'votes', value: 'votes', text: 'Votes' }];


        return (
            <div className="container" >
               
                <div className="post-list-controls" >
                    <h1 className="post-count" > { posts.length } Posts </h1>
                    <Select compact className="sort-selector" placeholder='Sort By' options={sortOptions} />
                </div>  

                <div className="post-list" >
                    
                    { posts.map( (post, i) => {
						return <PostInList key={i} post={post} />
					})}

                </div>   

                <div className="new-post-link" >
                   
                    <Link to="/new">
                        <Button positive className="post-list-add-button" >
                            <Icon name='plus' />
                            Add New Post 
                        </Button>
                    </Link>

                </div>  
            </div>
        );
    }
}

export default PostList;
