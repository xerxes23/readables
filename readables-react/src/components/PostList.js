import React, { Component } from 'react'
import { Button, Icon, Select } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PostInList from './PostInList'
import { sortByDate, sortByScore } from '../utils/utils'
import { Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { updateSortMethod } from '../actions/posts'

class PostList extends Component {

    render() {
        

        const { posts, sortMethod } = this.props;
        console.log(posts)
        
        if (posts.length) {
            sortMethod == 'date' ? posts.sort(sortByDate) : posts.sort(sortByScore)
        }

        const postNumber = posts? posts.length === 1? `1 post`: `${posts.length} posts`: 'loading'

        const sortOptions = [{ key: 'date', value: 'date', text: 'Date' },
        { key: 'score', value: 'score', text: 'Score' }];


        return (
            <div className="container" >
               
                <div className="post-list-controls" >
                    <h1 className="post-count" > { posts.length } Posts </h1>
                    <select
                        value={sortMethod}
                        onChange={event => {this.props.updateSortMethod(event.target.value)}}
                    >
                        <option value="score">Top Score</option>
                        <option value="date">Most recent</option>
                    </select>
                </div>  

                <div className="post-list" >
                    
                    { posts.length ? posts.map( (post, i) => {
						return <PostInList key={i} post={post} />
					}): <Loader active />
                    
                    }  

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



function mapStateToProps (state, props) {
    return {
      sortMethod: state.sortMethod
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        updateSortMethod: newSortMethod => {
            dispatch(updateSortMethod(newSortMethod))
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (PostList);
