import React, { Component } from 'react'
import PostList from './PostList'
import Categories from './Categories'


class Home extends Component {

    render() {
        const { posts, categories } = this.props;

        return (
            <div className="" >

                {/* Categories Component */}

                <Categories categories={ categories } />


                {/* Post List Component */}

                <PostList sortMethod={'date'} posts={posts}/>

            </div>
        );
    }
}

export default Home;
