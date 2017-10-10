// Libs
import React, { Component } from 'react'

// Components
import PostList from '../containers/PostList'
import CategoryHeader from './CategoryHeader'


const CategoryView = (props) => {

    const { posts, categoryPath, history } = props

    const filteredPosts = posts.filter( p => {
        return p.category === categoryPath
    })

    return (
        <div className="" >

            {/* Category Header Component */}

            <CategoryHeader categoryPath={ categoryPath }/>


            {/* Post List Component */}

            <PostList posts={filteredPosts} history={history} />

        </div>
    );
    
}

export default CategoryView
