import React, { Component } from 'react'
import { Button, Icon, Select } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PostInList from './PostInList'

const objectToArray = obj => {
    if (obj) return Object.keys(obj).map(key => obj[key])
    else return []
  }

class PostList extends Component {

    render() {
        const { posts } = this.props;
        const sortOptions = [{ key: 'date', value: 'date', text: 'Date' },
        { key: 'votes', value: 'votes', text: 'Votes' }];
        return (
            <div className="container" >
               
                <div className="post-list-controls" >
                    <h1 className="post-count" > { objectToArray(posts).length } Posts </h1>
                    <Select className="sort-selector" placeholder='Sort By' options={sortOptions} />
                </div>  

                <div className="post-list" >
                    
                    { objectToArray(posts).map( (post, i) => {
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
