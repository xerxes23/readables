import React, { Component } from 'react'
import { Button, Icon, Loader } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PostInList from './PostInList'
import { sortByDate, sortByScore } from '../utils/utils'
import { connect } from 'react-redux'

import { updateSortMethod } from '../actions/posts'

class PostList extends Component {

    render() {
        

        const { posts, sortMethod, history } = this.props;
        
        if (posts.length) {
            sortMethod === 'date' ? posts.sort(sortByDate) : posts.sort(sortByScore)
        }

        let visiblePosts = posts.filter( post => {return post.deleted===false})
        const postNumber = posts? visiblePosts.length === 1? `1 post`: `${visiblePosts.length} posts`: 'loading'


        return (
            <div className="container" >
               
                <div className="post-list-controls" >
                    <h1 className="post-count" > { postNumber } </h1>
                    <select
                        value={sortMethod}
                        onChange={event => {this.props.updateSortMethod(event.target.value)}}
                    >
                        <option value="score">Top Score</option>
                        <option value="date">Most recent</option>
                    </select>
                </div>  

                <div className="post-list" >
                    
                    { posts ? posts
                    .filter( post => {return post.deleted===false}) 
                    .map( (post, i) => {
						return <PostInList key={i} post={post} history={history} />
					}): <div className='loader' > <Loader size='large' active /> </div>
                    
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



const mapStateToProps = (state, ownProps) => ({
      sortMethod: state.sortMethod
    })
  
  
const mapDispatchToProps = (dispatch, ownProps) => ({
        updateSortMethod(newSortMethod) {
            dispatch(updateSortMethod(newSortMethod))
        }
    })
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (PostList);
