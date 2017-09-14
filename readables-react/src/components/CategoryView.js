// Libs
import React, { Component } from 'react'


// Components
import PostList from './PostList'
import CategoryHeader from './CategoryHeader'


class CategoryView extends Component {



    render() {
        const { posts, categoryPath } = this.props
    
        const filteredPosts = posts.filter( p => {
            return p.category === categoryPath
        })

        
        return (
            <div className="" >

                {/* Category Header Component */}

                <CategoryHeader categoryPath={ categoryPath }/>


                {/* Post List Component */}

                <PostList posts={filteredPosts}/>

            </div>
        );
    }
}

export default CategoryView
