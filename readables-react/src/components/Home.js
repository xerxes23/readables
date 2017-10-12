import React from 'react'
import PostList from '../containers/PostList'
import Categories from './Categories'


const Home = (props) => {

    const { posts, categories, history } = props

    return (
        <div >
            {/* Categories Component */}

            <Categories categories={ categories } />

            {/* Post List Component */}

            <PostList posts={posts} history={history}/>

        </div>
    );

}

export default Home;
