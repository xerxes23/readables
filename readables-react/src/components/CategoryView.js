// Libs
import React, { Component } from 'react'


// Components
import PostList from './PostList'
import CategoryHeader from './CategoryHeader'


class CategoryView extends Component {



    render() {
        const objectToArray = obj => {
            if (obj) return Object.keys(obj).map(key => obj[key])
            else return []
          }
        const { posts } = this.props;
        const filteredPosts = objectToArray(posts).filter( p => {
            return p.category === "react"
        })
        return (
            <div className="" >

                {/* Category Header Component */}

                <CategoryHeader />


                {/* Post List Component */}

                <PostList posts={filteredPosts}/>

            </div>
        );
    }
}

export default CategoryView
