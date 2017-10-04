import React, { Component } from 'react'
import PostList from './PostList'
import Categories from './Categories'


class Home extends Component {

    render() {
        const { posts, categories, history } = this.props;

        return (
            <div className="" >

                {/* Categories Component */}

                <Categories categories={ categories } />


                {/* Post List Component */}

                <PostList posts={posts} history={history}/>

            </div>
        );
    }
}

export default Home;
