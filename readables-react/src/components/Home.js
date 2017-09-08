import React, { Component } from 'react'
import PostList from './PostList'
import Categories from './Categories'


class Home extends Component {

    render() {
        const { posts } = this.props;

        return (
            <div className="" >

                {/* Categories Component */}

                <Categories />


                {/* Post List Component */}

                <PostList posts={posts}/>

            </div>
        );
    }
}

export default Home;
